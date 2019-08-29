import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-tagbox',
    templateUrl: './form-tagbox.component.html',
    styleUrls: ['./form-tagbox.component.scss']
})
export class FormTagBoxComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
