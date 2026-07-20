"use client"

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes((n) => n + 1)}
      className="mt-4 px-3 py-1 border rounded hover:bg-gray-100"
    >
      ❤️ {likes}
    </button>
  );
}