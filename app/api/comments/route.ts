import { NextRequest, NextResponse } from "next/server";
import { getComments, addComment } from "@/lib/comments";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const postId = request.nextUrl.searchParams.get("postId");
  if (!postId) {
    return NextResponse.json({ error: "postId query param is required" }, { status: 400 });
  }
  const comments = await getComments(postId);
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { postId, author, text } = body;

  if (!postId || !author || !text) {
    return NextResponse.json({ error: "postId, author, and text are required"}, { status: 400 });
  }

  await addComment(postId, author, text);
  revalidateTag(`comments-${postId}`, "max");

  return NextResponse.json({ success: true }, { status: 201 });
}