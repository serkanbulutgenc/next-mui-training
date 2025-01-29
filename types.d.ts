export interface Posts {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Post>;
}

export interface Post {
  id?: number;
  title: string;
  summary?: string;
  content: string;
  category?: string;
  owner?: string;
}
