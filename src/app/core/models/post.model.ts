// Root response
export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

// Post
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: Reactions;
}

// Nested objects
export interface Reactions {
  likes: number;
  dislikes: number;
}
