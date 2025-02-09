import type { Posts, Post } from "../../types.d.ts";

const API_BASE_URL = "https://sbgnc.pythonanywhere.com/api/";

export async function getPosts(
  limit: number = 10,
  offset: number = 0
): Promise<Posts> {
  const fetchUrl = new URL("posts", API_BASE_URL);
  fetchUrl.searchParams.append("limit", String(limit));
  fetchUrl.searchParams.append("offset", String(limit * offset));

  const res = await fetch(fetchUrl.toString());

  if (!res.ok) {
    throw new Error("An error occured while getting posts from the server");
  }

  return res.json();
}

export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://sbgnc.pythonanywhere.com/api/posts/${id}`);

  if (!res.ok) {
    throw new Error("An error occured while getting post from the server");
  }

  return res.json();
}

export async function savePost(postData: Post): Promise<Post> {
  const res = await fetch(`https://sbgnc.pythonanywhere.com/api/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) {
    throw new Error("An error occured while saving post into database");
  }

  return res.json();
}
