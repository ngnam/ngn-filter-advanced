import { ValidatorFn } from '@angular/forms';
export enum FieldType {
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
    INPUT_TEXT = 'dx-input',
    BUTTON = 'dx-button',
    DATETIME = 'dx-datetime',
    DURATION_DATETIME = 'dx-duration-datetime',
    TAG = ' dx-tag',
    SELECT_WITHOUT_API = 'dx-select-without-api',
    SELECT_WITH_API = 'dx-select-with-api',
    CHECKBOX = 'dx-checkbox',
    NUMBER = 'dx-number',
    CUSTOM_CONTROL = 'dx-custom',
    RADIAN = 'dx-radian'
}
export interface FieldConfig {
    disabled?: boolean;
    label?: string;
    name: string;
    options?:
        | string[]
        | { key: string; value: string; data?: any[] }
        | { key: string; value: string }[];
    placeholder?: string;
    type: string;
    api?: string;
    validation?: ValidatorFn[];
    value?: any;
    order?: number;
}
