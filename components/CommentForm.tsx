"use client"

import { useActionState, useOptimistic, useRef } from "react";
import { postComment, type CommentFormState } from "@/app/blog/actions";
import type { Comment } from "@/lib/comments";

const initialState: CommentFormState = {};

export default function CommentForm({
  postId,
  comments,
}: {
  postId: string;
  comments: Comment[];
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: Comment) => [...state, newComment]
  );
  
  async function submitComment(prevState: CommentFormState, formData: FormData) {
    addOptimisticComment({
      id: `optimistic-${Date.now()}`,
      postId,
      author: formData.get("author")?.toString() || "Anonymous",
      text: formData.get("text")?.toString() || "",
      createdAt: new Date().toISOString(),
    });
    formRef.current?.reset();

    return postComment(postId, prevState, formData);
  }

  const [state, formAction, isPending] = useActionState(submitComment, initialState);

  return (
    <div className="mt-8">
      <h2 className="font-semibold mb-2">Comments</h2>
      <ul className="space-y-2 mb-4">
        {optimisticComments.map((c) => (
          <li key={c.id} className="text-sm border-b pb-1">
            <span className="font-medium">{c.author}</span>: {c.text}
          </li>
        ))}
      </ul>

      <form ref={formRef} action={formAction} className="space-y-2">
        <input name="author" placeholder="Your name" className="border px-2 py-1 rounded w-full" required />
        <textarea name="text" placeholder="Say something..." className="border px-2 py-1 rounded w-full" required />
        {state.error && <p className="text-red-600 text-sm">{state.error}</p>}
        <button type="submit" disabled={isPending} className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50">
          {isPending ? "Posting..." : "Post comment"}
        </button>
      </form>
    </div>
  );
}