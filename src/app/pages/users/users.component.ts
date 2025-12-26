import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../core/models/user.model';
import { UsersService } from '../../core/services/api/users.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
     this.usersService.getAllUsers().subscribe({
       next: (data : {users : Array<User>}) =>{
         this.users = data.users;
       }
     })
  }

}
