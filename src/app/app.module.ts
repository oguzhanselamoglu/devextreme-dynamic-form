import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxSelectBoxModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
      QuestionComponent,
      DynamicFormComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxTemplateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
