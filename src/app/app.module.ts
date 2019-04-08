import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule  }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { AppComponent }          from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }