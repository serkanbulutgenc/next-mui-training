import PostDetail from "@/components/blog/post-detail";
import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import React from "react";

const PostDetailPage: React.FC<{ params: Promise<{ slug: string }> }> = async ({
  params,
}) => {
  const slug = (await params).slug;
  const post = await getPost();

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostDetail post={post} />;
};

export default PostDetailPage;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.results.map((post) => ({
    slug: post.slug,
  }));
}
