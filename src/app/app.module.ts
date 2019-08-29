import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FilterAdvancedModule } from './filter-advanced/filter-advanced.module';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FilterAdvancedModule],
    declarations: [AppComponent, HelloComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
