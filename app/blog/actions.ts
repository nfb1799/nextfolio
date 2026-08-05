"use server";

import { addComment } from "@/lib/comments";
import { revalidateTag, updateTag } from "next/cache";

export type CommentFormState = {
  error?: string;
};

export async function postComment(
  postId: string,
  prevState: CommentFormState,
  formData: FormData
): Promise<CommentFormState> {
  const author = formData.get("author")?.toString().trim();
  const text = formData.get("text")?.toString().trim();

  if (!author || !text) {
    return { error: "Name and comment are required." };
  }

  await addComment(postId, author, text);
  updateTag(`comments-${postId}`);
  return {};
}

export async function refreshPosts() {
  revalidateTag("posts", "max");
}