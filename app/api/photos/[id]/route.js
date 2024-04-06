import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";
export async function GET(request, { params: { id } }) {
  const data = await getPhotoById(id);
  return NextResponse.json(data);
}
