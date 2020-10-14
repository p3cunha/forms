import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';






@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormModule,
    HttpClientModule,
    TemplateDrivenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
