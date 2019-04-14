import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserConfirmationComponent } from './user-confirmation/user-confirmation.component';
import { PostACaseComponent } from './post-a-case/post-a-case.component';
const routes: Routes = [
  { path : 'login' , component : LoginComponent },
  { path : 'signup' , component : SignupComponent },
  { path : 'edit-profile' , component : EditProfileComponent },
  { path : 'user-confirmation' , component : UserConfirmationComponent },
  { path: 'post-a-case' , component : PostACaseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
