import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/api/users.service';
import { Post } from '../../core/models/post.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../core/models/user.model';



@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  posts: Array<Post> = [];
  user!: User;

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

    this.route.params.subscribe(params => {
        const id = +params['id'];
        this.usersService.getUserPosts(id).subscribe(posts => {
          this.posts = posts.posts;
        });
      });
    }
}

