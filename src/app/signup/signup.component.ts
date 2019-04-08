import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    role : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
