import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { topics } from '../case';
import { roles, User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-a-case',
  templateUrl: './post-a-case.component.html',
  styleUrls: ['./post-a-case.component.css']
})
export class PostACaseComponent implements OnInit {
  topics : string[] = [];
  responsibleUsers : User[] = [];

  postACaseForm = new FormGroup({
    topic : new FormControl('', Validators.required),
    content : new FormControl('', Validators.required),
    responsibleUser : new FormControl('', Validators.required)
  });

  constructor(
    private userService : UserService,
  ) { }

  ngOnInit() {
    this.topics.push(topics.COMPLAINT);
    this.topics.push(topics.ENTEGHAD);
    this.topics.push(topics.SUGGESTION);
    this.topics.push(topics.REQUEST);
    this.userService.getResponsibleUsers().subscribe(responsibleUsers => this.responsibleUsers = responsibleUsers.filter(responsibleUser => responsibleUser.role != roles.STUDENT));
  }
  onSubmit(){
    
  }

}
