import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './http-request.service';
import {
    DxTextBoxModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxValidatorModule,
    DxButtonModule
} from 'devextreme-angular';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FilterAdvancedComponent } from './containers/filter-advanced/filter-advanced.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormSingleDateComponent } from './components/form-single-date/form-single-date.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        DxTextBoxModule,
        DxDateBoxModule,
        DxSelectBoxModule,
        DxValidatorModule,
        DxButtonModule
    ],
    declarations: [
        DynamicFieldDirective,
        FilterAdvancedComponent,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormSingleDateComponent
    ],
    exports: [FilterAdvancedComponent],
    providers: [HttpRequestService],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormSingleDateComponent
    ]
})
export class FilterAdvancedModule {}
