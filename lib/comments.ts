import "server-only"

export type Comment = {
  id: string;
  postId: string;
  author: string;
  text: string;
  createdAt: string;
};

// Naive in-memory store - resets when the dev server restarts
// Just for learning purposes
const comments: Comment[] = [];

export async function getComments(postId: string): Promise<Comment[]> {
  return comments.filter((c) => c.postId === postId);
}

export async function addComment(postId: string, author: string, text: string) {
  comments.push({
    id: crypto.randomUUID(),
    postId,
    author,
    text,
    createdAt: new Date().toISOString(),
  });
}