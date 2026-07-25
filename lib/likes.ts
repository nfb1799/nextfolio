import "server-only"

const likes = new Map<string, number>();

export async function getLikes(postId: string): Promise<number> {
  return likes.get(postId) ?? 0;
}

export async function incrementLikes(postId: string): Promise<number> {
  const next = (likes.get(postId) ?? 0) + 1;
  likes.set(postId, next);
  return next;
}