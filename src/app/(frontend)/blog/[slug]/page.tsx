import PostDetail from "@/components/blog/post-detail";
import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import React from "react";
import { Post } from "../../../../../types";

const PostDetailPage: React.FC<{ params: Promise<{ slug: string }> }> = async ({
  params,
}) => {
  const slug = (await params).slug;
  const posts = await getPosts();

  // #TODO
  const selectedPost = posts.results.find(
    (postItem: Post) => postItem.slug === slug
  );

  if (!selectedPost) {
    notFound();
  }

  return <PostDetail post={selectedPost} />;
};

export default PostDetailPage;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.results.map((post) => ({
    slug: post.slug,
  }));
}
