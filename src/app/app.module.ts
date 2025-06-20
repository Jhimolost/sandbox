import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusInputDirectiveTsDirective } from './directvives/focus-input.directive.ts.directive';
import { ReverseTextTsPipe } from './pipes/reverse-text.ts.pipe';
import { ReactiveLoginComponent } from './components/reactive-login/reactive-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TypeaheadComponent,
    FocusInputDirectiveTsDirective,
    ReverseTextTsPipe,
    ReactiveLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
