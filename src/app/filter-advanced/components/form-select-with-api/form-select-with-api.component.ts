import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { HttpRequestService } from '../../http-request.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-form-select-with-api',
    templateUrl: './form-select-with-api.component.html',
    styleUrls: ['./form-select-with-api.component.scss']
})
export class FormSelectWithApiComponent implements Field, OnInit, OnDestroy {
    config: FieldConfig;
    group: FormGroup;
    dataSource: any[];
    private subcription: Subscription = new Subscription();
    constructor(private httpService: HttpRequestService) {}

    ngOnInit(): void {
        // this.dataSource = [];
        this.loadData();
    }

    ngOnDestroy() {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    }

    onDropdownOpened() {
        if (this.dataSource && this.dataSource.length > 0) {
            return;
        }
    }

    loadData() {
        if (this.config && this.config.api) {
            const loadData$ = this.httpService
                .get(this.config.api)
                .subscribe(data => {
                    // console.log('load data from API after opened: ', data);
                    this.dataSource = data;
                });
            this.subcription.add(loadData$);
        }
    }
}
