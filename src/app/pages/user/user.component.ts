import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../core/models/user.model';
import { UsersService } from '../../core/services/api/users.service';
import { Post } from '../../core/models/post.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

    user! : User;
    posts : Array<Post> = [];
    
    constructor(
      private route : ActivatedRoute,
      private usersService : UsersService
    ) {}


    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id = +params['id'];
        this.usersService.getUserById(id).subscribe(user => {
          this.user = user;
        });
      }); 
    }

}
