import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User , roles } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username : new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

}
