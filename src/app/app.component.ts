import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {
    FieldConfig,
    FieldType
} from './filter-advanced/models/field-config.interface';
import { FilterAdvancedComponent } from './filter-advanced/containers/filter-advanced/filter-advanced.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild(FilterAdvancedComponent, { static: true })
    formFilter: FilterAdvancedComponent;

    config: FieldConfig[] = [];

    ngOnInit() {
        this.config = [
            {
                type: 'dx-input',
                label: 'field input 1',
                name: 'search1',
                placeholder: 'Enter text'
            },
            {
                type: 'dx-input',
                label: 'field input 2',
                name: 'search2',
                placeholder: 'Enter text'
            },
            {
                type: 'dx-input',
                label: 'field input 3',
                name: 'search3',
                placeholder: 'Enter text'
            },
            {
                type: 'dx-input',
                label: 'field input 4',
                name: 'search4',
                placeholder: 'Enter text'
            },
            {
                type: 'dx-select-without-api',
                label: 'control without API',
                name: 'Address',
                options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
                placeholder: 'Select an option'
            },
            {
                type: 'dx-datetime',
                label: 'Date single',
                name: 'FromDatetime',
                placeholder: 'dd/mm/yyyy'
            },
            {
                type: 'dx-button',
                label: 'Filter',
                name: 'submitFilter'
            }
        ];
    }

    ngAfterViewInit() {
        let previousValid = this.formFilter.valid;
        this.formFilter.changes.subscribe(() => {
            if (this.formFilter.valid !== previousValid) {
                previousValid = this.formFilter.valid;
            }
        });
    }

    submitFilter(value: { [name: string]: any }) {
        console.log(value);
    }
}
