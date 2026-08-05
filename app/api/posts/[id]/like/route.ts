import { NextResponse } from "next/server";
import { incrementLikes } from "@/lib/likes";
import { revalidateTag } from "next/cache";

export async function POST(
  request: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const total = await incrementLikes(id);
  revalidateTag(`likes-${id}`, "max");
  return NextResponse.json({ likes: total });
}