import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-single-date',
    templateUrl: './form-single-date.component.html',
    styleUrls: ['./form-single-date.component.scss']
})
export class FormSingleDateComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
