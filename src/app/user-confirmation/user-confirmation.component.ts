import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.css']
})
export class UserConfirmationComponent implements OnInit {
  notConfirmedUsers : User[];
  confirmedUsers : User[];
  constructor(
    private userService : UserService,
  ) { }
  ngOnInit() {
    this.getUsers();
  }

  getnotConfirmedUsers() : void{
    this.userService.getNotConfirmedUsers().subscribe(notConfirmedUsers => this.notConfirmedUsers = notConfirmedUsers);
  }

  getConfirmedUsers() : void{
    this.userService.getConfirmedUsers().subscribe(confirmedUsers => this.confirmedUsers = confirmedUsers);
  }

  getUsers():void{
    this.getConfirmedUsers();
    this.getnotConfirmedUsers();
  }

  confirm(user : User):void{
    user.confirmed = true;
    this.userService.updateUser(user).subscribe(() => this.getUsers());
  }

  reject(user : User):void{
    user.confirmed = false;
    this.userService.updateUser(user).subscribe(() => this.getUsers());
  }

}
