import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User , roles } from '../user';
//import { userInfo } from 'os';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user : User = {
    id : 11,
    username : 'mshadab',
    password : '11111111',
    firstName : 'Mohamad',
    lastName : 'Shadab',
    role : roles.STUDENT,
    confirmed : true,
  }
  editProfileForm = new FormGroup({
    firstname : new FormControl(this.user.firstName),
    lastname : new FormControl(this.user.lastName),
    role : new FormControl(this.user.role),
    username : new FormControl(this.user.username),
    password : new FormControl(this.user.password),
    passwordAgain : new FormControl(this.user.password),
  }
  )

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }
}