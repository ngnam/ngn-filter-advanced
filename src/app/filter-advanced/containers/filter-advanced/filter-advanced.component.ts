import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output
} from '@angular/core';

import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
    ValidationErrors,
    FormArray
} from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
import { isNotEmpty } from '../../utilities';
import { fadeInOutAnimation } from '../../animations/fadeInOut.animation';

@Component({
    selector: 'app-filter-advanced',
    templateUrl: './filter-advanced.component.html',
    styleUrls: ['./filter-advanced.component.scss'],
    animations: [fadeInOutAnimation]
})
export class FilterAdvancedComponent implements OnChanges, OnInit {
    @Input()
    config: FieldConfig[];

    @Input()
    defaultValidation: ValidationErrors[] = [];

    @Input()
    defaultText: string = 'Search text...';

    @Input()
    showFilterText = 'Filter';

    @Input()
    helperFilterText = 'Filter order by:';

    @Output()
    submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;
    isShowFilter = false;

    get controls() {
        return this.config.filter(({ type }) => type !== 'dx-button');
    }

    get changes() {
        return this.form.valueChanges;
    }
    get valid() {
        return this.form.valid;
    }
    get inValid() {
        return this.form.invalid;
    }
    get value() {
        return this.form.value;
    }
    get dirty() {
        return this.form.dirty;
    }

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.createGroup();
    }

    ngOnChanges() {
        if (this.form) {
            const controls = Object.keys(this.form.controls);
            const configControls = this.controls.map(item => item.name);

            controls
                .filter(control => !(configControls.indexOf(control) !== -1))
                .forEach(control => this.form.removeControl(control));

            configControls
                .filter(control => !(controls.indexOf(control) !== -1))
                .forEach(name => {
                    const config = this.config.find(
                        control => control.name === name
                    );
                    this.form.addControl(name, this.createControl(config));
                });
        }
    }

    protected createGroup() {
        const group = this.fb.group({
            queryString: ['', this.defaultValidation]
        });
        this.controls.forEach(control =>
            group.addControl(control.name, this.createControl(control))
        );
        return group;
    }

    protected createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        const search: string = this.form.get('queryString').value as string;
        this.setValue('queryString', search.trim());
        this.submit.emit(this.value);
        this.isShowFilter = false;
    }

    protected setDisabled(name: string, disable: boolean) {
        if (this.form.controls[name]) {
            const method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }

        this.config = this.config.map(item => {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    }

    protected setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    }

    onSearch() {
        const search: string = this.form.get('queryString').value as string;
        this.setValue('queryString', search.trim());
    }

    onClearSearch() {
        if (!isNotEmpty(this.form.get('queryString').value)) {
            this.submit.emit(this.value);
        }
    }

    showFilterAdvanced() {
        this.isShowFilter = !this.isShowFilter;
    }

    private validateAllFields(formGroup: FormGroup | FormArray) {
        formGroup.markAsTouched({ onlySelf: true });

        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFields(control);
            }
        });
    }
}
