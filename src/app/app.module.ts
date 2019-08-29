import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FilterAdvancedModule } from './filter-advanced/filter-advanced.module';

@NgModule({
    imports: [BrowserModule, FilterAdvancedModule],
    declarations: [AppComponent, HelloComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
