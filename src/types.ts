interface Category {
  categoryId: string;
  name: string;
  path: string;
  timestamp: string;
  deleted: number;
}

interface Post {
  postId: string;
  timestamp: string;
  title: string;
  author: string;
  body: string;
  likeCount: number;
  dislikeCount: number;
  deleted: number;
  categoryId: string;
  commentCount: number;
}

interface Comment {
  commentId: string;
  postId: string;
  timestamp: string;
  author: string;
  body: string;
  likeCount: number;
  dislikeCount: number;
  deleted: string;
}

type Categories = Category[];
type Posts = Post[];
type Comments = Comment[];

export { Category, Categories, Post, Posts, Comment, Comments };
