import { getFilmById } from "@/lib/ghibliClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const film = await getFilmById(id);
    return NextResponse.json(film);
  } catch (error) {
    return NextResponse.json(
      { message: "Película no encontrada" },
      { status: 404 }
    );
  }
}