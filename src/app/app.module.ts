import { LoginCompComponent } from './auth/login-v2/login-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './auth/login-v2/login-form.component';
import { LoginAsyncComponent } from './auth/login/login-async.component';
import { Login2Component } from './auth/login/login2.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    LoginAsyncComponent,
    LoginFormComponent,
    LoginCompComponent
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
