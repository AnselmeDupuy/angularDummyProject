import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) { }
  
    getCommentsByPostId (postId: number) : Observable<{comments : Array<Comment>}> {
      const url : string = `https://dummyjson.com/posts/${postId}/comments`;
      return this.http.get<{comments : Array<Comment>}>(url);
    }
}
