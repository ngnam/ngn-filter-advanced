import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './http-request.service';
import {
    DxTextBoxModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxValidatorModule,
    DxButtonModule,
    DxTagBoxModule
} from 'devextreme-angular';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FilterAdvancedComponent } from './containers/filter-advanced/filter-advanced.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormSingleDateComponent } from './components/form-single-date/form-single-date.component';
import { FormSelectWithApiComponent } from './components/form-select-with-api/form-select-with-api.component';
import { FormTagBoxComponent } from './components/form-tagbox/form-tagbox.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        DxTextBoxModule,
        DxDateBoxModule,
        DxSelectBoxModule,
        DxValidatorModule,
        DxButtonModule,
        DxTagBoxModule
    ],
    declarations: [
        DynamicFieldDirective,
        FilterAdvancedComponent,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormSingleDateComponent,
        FormSelectWithApiComponent,
        FormTagBoxComponent
    ],
    exports: [FilterAdvancedComponent],
    providers: [HttpRequestService],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormSingleDateComponent,
        FormSelectWithApiComponent,
        FormTagBoxComponent
    ]
})
export class FilterAdvancedModule {
    static forFeature(httpService?: any): ModuleWithProviders {
        return {
            ngModule: FilterAdvancedModule,
            providers: [{ provide: HttpRequestService, useClass: httpService }]
        };
    }
}
