import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FieldConfig } from './filter-advanced/models/field-config.interface';
import { FilterAdvancedComponent } from './filter-advanced/containers/filter-advanced/filter-advanced.component';
import {
    mapToObjectParam,
    mapToStringParam
} from './filter-advanced/utilities';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild(FilterAdvancedComponent, { static: true })
    formFilter: FilterAdvancedComponent;
    objectParrams = {};
    stringParrams = '';
    config: FieldConfig[] = [];

    ngOnInit() {
        this.config = [
            {
                type: 'dx-input',
                label: 'field input 1',
                name: 'search1',
                placeholder: 'Enter text',
                order: 2
            },
            {
                type: 'dx-input',
                label: 'field input 2',
                name: 'search2',
                placeholder: 'Enter text',
                order: 3
            },
            {
                type: 'dx-input',
                label: 'field input 3',
                name: 'search3',
                placeholder: 'Enter text',
                order: 5
            },
            {
                type: 'dx-input',
                label: 'field input 4',
                name: 'search4',
                placeholder: 'Enter text',
                order: 4
            },
            {
                type: 'dx-select-without-api',
                label: 'Select without API',
                name: 'Address',
                options: {
                    key: 'Id',
                    value: 'Name',
                    data: [
                        { Id: 1, Name: 'Ha Noi' },
                        { Id: 2, Name: 'Ho Chi Minh' },
                        { Id: 3, Name: 'Da Nag' }
                    ]
                },
                placeholder: 'Select an option',
                order: 1
            },
            {
                type: 'dx-datetime',
                label: 'Date single 1',
                name: 'FromDatetime4',
                placeholder: 'dd/mm/yyyy',
                order: 8
            },
            {
                type: 'dx-datetime',
                label: 'Date single 2',
                name: 'FromDatetime3',
                placeholder: 'dd/mm/yyyy',
                order: 9
            },
            {
                type: 'dx-datetime',
                label: 'Date single 3',
                name: 'FromDatetime2',
                placeholder: 'dd/mm/yyyy',
                order: 10
            },
            {
                type: 'dx-select-with-api',
                label: 'Select with API',
                name: 'employee',
                options: {
                    key: 'id',
                    value: 'name'
                },
                placeholder: 'Select an option',
                api: `/assets/dropdown.data.json`,
                order: 7
            },
            {
                type: 'dx-tagbox',
                label: 'tags',
                name: 'tags',
                placeholder: 'Enter a tag name',
                order: 11
            },
            {
                type: 'dx-button',
                label: 'Filter',
                name: 'submitFilter',
                order: 99
            }
        ].sort((a, b) => a.order - b.order);
    }

    ngAfterViewInit() {
        let previousValid = this.formFilter.valid;
        this.formFilter.changes.subscribe(data => {
            // map form value
            this.objectParrams = mapToObjectParam(data);
            this.stringParrams = mapToStringParam(data);
            if (this.formFilter.valid !== previousValid) {
                previousValid = this.formFilter.valid;
            }
        });
    }

    submitFilter(value: { [name: string]: any }) {
        console.log(value);
    }
}
