"use client"

import { useActionState, useOptimistic, useRef } from "react";
import { postComment, type CommentFormState } from "@/app/blog/actions";
import type { Comment } from "@/lib/comments";
import Button from "@/components/Button";
import { input } from "@/lib/ui";

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
      {optimisticComments.length === 0 ? (
        <p className="text-sm text-slate-400 mb-4">No comments yet — be the first.</p>
      ) : (
        <ul className="space-y-2 mb-4">
          {optimisticComments.map((c) => (
            <li key={c.id} className="text-sm border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-900">{c.author}</span>
              <span className="text-slate-600">: {c.text}</span>
            </li>
          ))}
        </ul>
      )}

      <form ref={formRef} action={formAction} className="space-y-2">
        <input name="author" placeholder="Your name" className={input} required />
        <textarea name="text" placeholder="Say something..." className={input} required />
        {state.error && <p className="text-red-600 text-sm">{state.error}</p>}
        <Button type="submit" variant="primary" disabled={isPending}>
          {isPending ? "Posting..." : "Post comment"}
        </Button>
      </form>
    </div>
  );
}