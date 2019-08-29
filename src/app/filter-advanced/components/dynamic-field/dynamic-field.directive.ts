import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnChanges,
    OnInit,
    Type,
    ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormSingleDateComponent } from '../form-single-date/form-single-date.component';
import { FormSelectWithApiComponent } from '../form-select-with-api/form-select-with-api.component';

// dx-input
// dx-button
// dx-datetime
// dx-duration-datetime
// dx-tag
// dx-select-without-api
// dx-select-with-api
// dx-checkbox
// dx-number
// dx-radia

const components: { [type: string]: Type<Field> } = {
    'dx-button': FormButtonComponent,
    'dx-input': FormInputComponent,
    'dx-datetime': FormSingleDateComponent,
    'dx-select-without-api': FormSelectComponent,
    'dx-select-with-api': FormSelectWithApiComponent
};

@Directive({
    selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
    @Input()
    config: FieldConfig;

    @Input()
    index: number;

    @Input()
    group: FormGroup;

    component: ComponentRef<Field>;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {}

    ngOnChanges() {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    }

    ngOnInit() {
        if (!components[this.config.type]) {
            const supportedTypes = Object.keys(components).join(', ');
            throw new Error(
                `Trying to use an unsupported type (${this.config.type}). Supported types: ${supportedTypes}`
            );
        }
        const component = this.resolver.resolveComponentFactory<Field>(
            components[this.config.type]
        );
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}
