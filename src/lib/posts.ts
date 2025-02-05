import type { Posts, Post } from "../../types.d.ts";

export async function getPosts(): Promise<Posts> {
  const res = await fetch(`https://sbgnc.pythonanywhere.com/api/posts/`);

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
