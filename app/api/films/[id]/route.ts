import { getFilmById } from "@/lib/ghibliClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const film = await getFilmById(params.id);
    return NextResponse.json(film);
  } catch (error) {
    return NextResponse.json(
      { message: "Película no encontrada" },
      { status: 404 }
    );
  }
}