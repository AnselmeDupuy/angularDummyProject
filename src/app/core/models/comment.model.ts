// Root response
export interface CommentsResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}

// Comment
export interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: CommentUser;
}

// Nested user (lightweight)
export interface CommentUser {
  id: number;
  username: string;
  fullName: string;
}
