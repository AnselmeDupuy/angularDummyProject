import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

    getAllUsers () : Observable<{users : Array<User>}> {
      const url : string = "https://dummyjson.com/users";
      return this.http.get<{users : Array<User>}>(url);
    }

    getUserById (id: number) : Observable<User> {
      const url : string = `https://dummyjson.com/users/${id}`;
      return this.http.get<User>(url)
    }

    getUserPosts (userId: number) : Observable<{posts : Array<Post>}> {
      const url : string = `https://dummyjson.com/users/${userId}/posts`;
      return this.http.get<{posts : Array<Post>}>(url)
    }

    getPostById (postId: number) : Observable<Post> {
      const url : string = `https://dummyjson.com/posts/${postId}`;
      return this.http.get<Post>(url)
    }
}
