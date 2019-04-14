import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule  }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { AppComponent }          from './app.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserConfirmationComponent } from './user-confirmation/user-confirmation.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PostACaseComponent } from './post-a-case/post-a-case.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    EditProfileComponent,
    UserConfirmationComponent,
    PostACaseComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }