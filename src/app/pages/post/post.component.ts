import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../../core/services/api/users.service';
import { Post } from '../../core/models/post.model';
import { Comment } from '../../core/models/comment.model';
import { CommentsService } from '../../core/services/api/comments.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  post! : Post;
  comments! : Comment[];


      constructor(
        private route : ActivatedRoute,
        private usersService : UsersService,
        private commentsService : CommentsService
      ) {}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
          const postId = +params['postId'];
          this.usersService.getPostById(postId).subscribe(post => {
            this.post = post;
          });
      });

      this.route.params.subscribe(params => {
        const postId = +params['postId'];
        this.commentsService.getCommentsByPostId(postId).subscribe(response => {
          this.comments = response.comments;
        });
    });
    }
}
