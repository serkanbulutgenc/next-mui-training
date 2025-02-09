export interface Category {
  id?: number;
  title: string;
}
export interface Posts {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Post>;
}

export interface Post {
  id?: number;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  category?: number;
  owner?: string;
  published_at?: string;
}
