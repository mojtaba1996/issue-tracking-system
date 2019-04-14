import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User , roles } from '../user';
import { validateConfig } from '@angular/router/src/config';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  selectionRoles : string[] = [];
  signUpForm = new FormGroup({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
    role : new FormControl('', Validators.required),
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    passwordAgain : new FormControl('', Validators.required),
  });

  constructor(
    private userservice : UserService
  ) { }

  ngOnInit() {
    this.selectionRoles.push(roles.EMPLOYEE);
    this.selectionRoles.push(roles.MANAGER);
    this.selectionRoles.push(roles.STUDENT);
    this.selectionRoles.push(roles.TEACHER);
  }
  onSubmit(){
    console.warn(this.signUpForm.get('firstname').value);
    this.userservice.addUser({} as User).subscribe();
  }

}
