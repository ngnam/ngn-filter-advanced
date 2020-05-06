## Filter Advanced Module

[![Build Status](https://travis-ci.org/ngnam/ngn-filter-advanced.svg?branch=master)](https://travis-ci.org/ngnam/ngn-filter-advanced)

## DEMOS

-   Demo Online: [View Demo here](https://ngnam.github.io/ngn-filter-advanced)

-   Desktop
    ![desktop form](demo-fill-form.png)
    ![demo-output-form](demo-output-form.png)

-   Mobile
    ![demo-mobile](demo-mobile.png)

## Features

-   Demo Online: [View Demo here](https://ngnam.github.io/ngn-filter-advanced)

-   Support lazy load module.
-   Support show/hide display with animation fadeInOut.
-   Support filter with query text (default only search if no advanced).
-   Support multiple filter query params.
-   Support sort control filter by order property.
-   Supported types:
    -   [x] dx-input
    -   [x] dx-button
    -   [x] dx-datetime
    -   [ ] dx-duration-datetime
    -   [x] dx-tag
    -   [x] dx-select-without-api
    -   [x] dx-select-with-api
    -   [ ] dx-checkbox
    -   [x] dx-number
    -   [ ] dx-radia
-   Easy to expand

```

    -   [x]  define type component:
    const components: { [type: string]: Type<Field> } = {
        'dx-button': FormButtonComponent,
        'dx-input': FormInputComponent,
        'dx-datetime': FormSingleDateComponent,
        'dx-select-without-api': FormSelectComponent,
        .....
        -   [x]  add more list type component
    };
```

-   Support Change custom button for display label, name

```
    {
        type: 'dx-button',
        label: 'Filter',
    }
```

-   Support custom Text (Search Text, Button Show filter search, helper filter order by):

```
    // ts
    @Input()
    defaultText: string = 'Search text...';

    @Input()
    showFilterText = 'Filter';

    @Input()
    helperFilterText = 'Filter order by:';

    // html
    <small *ngIf="config && config.length > 1">
        {{ helperFilterText }}
    </small>
```

-   :new: Support function map form value to Object Params & string query params

## HOW

-   Required:

    -   Install Bootstrap 4.3.1 `npm i bootstrap@4.3.1 --save` or latest stable version.
    -   Instal Devextreme and devextreme-angular 19.1.5 `npm i {devextreme@19.1.5, devextreme-angular@19.1.5 } --save` or latest stable version.
    -   Add Animation module `BrowserAnimationsModule` in app.module `import { BrowserAnimationsModule } from '@angular/platform-browser/animations';`

-   Import Theme:

```
    ...
        "styles": [
        ...
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/devextreme/dist/css/dx.common.css",
        "node_modules/devextreme/dist/css/dx.light.css",
        ...
        ],
    ...
```

-   Import Module

-   Use In codebehind \*.ts

    -   Declare variable use:

    ```
        @ViewChild(FilterAdvancedComponent, { static: true })
        formFilter: FilterAdvancedComponent;

        config: FieldConfig[] = [];
    ```

    -   Load JSON Config from API or from mock Config Data

    ```
        ngOnInit() {
            this.httpService.get('api/load-config-json').subcription(data => this.config = data;)
        }
    ```

    -   Update valid form in life-cycle ngAfterViewInit

    ```
        ngAfterViewInit() {
            let previousValid = this.formFilter.valid;
            this.formFilter.changes.subscribe(() => {
                if (this.formFilter.valid !== previousValid) {
                    previousValid = this.formFilter.valid;
                }
            });
        }
    ```

    -   Get output filter Submit

    ```
        submitFilter(value: { [name: string]: any }) {
            console.log(value);
        }
    ```

-   Use in view template \*.html

```
    <app-filter-advanced
        #formFilter
        defaultText="Search Text ..."
        showFilterText="Filter"
        helperFilterText = 'Filter order by:';
        [config]="config"
        (submit)="submitFilter($event)">
    </app-filter-advanced>
```

# Donate
If you find this project useful — or just feeling generous, consider buying me a beer or a coffee. Cheers! :beers: :coffee:
|               |               |
| ------------- |:-------------:|
|   <a href="https://www.paypal.me/ngnam39"><img src="https://github.com/ngnam/Resources/blob/master/donate_paypal.svg" height="40"></a>   | [![BMC](https://github.com/ngnam/Resources/blob/master/donate_coffee.png)](https://www.buymeacoffee.com/ngnam) |
  

Thank you!
