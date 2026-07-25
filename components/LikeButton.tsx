"use client"

import { useState } from "react";

export default function LikeButton({
  postId,
  initialLikes,
}: {
  postId: string;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiking, setIsLiking] = useState(false);

  async function handleLike() {
    setIsLiking(true);
    setLikes((n) => n + 1);

    try {
      const res = await fetch(`/api/posts/${postId}/like`, { method: "POST" });
      const data = await res.json();
      setLikes(data.likes); // reconcile with real server total
    } catch {
      setLikes((n) => n - 1); // rollback on failure
    } finally {
      setIsLiking(false);
    }
  }
  
  return (
    <button
      onClick={handleLike}
      disabled={isLiking}
      className="mt-4 px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
    >
      ❤️ {likes}
    </button>
  );
}