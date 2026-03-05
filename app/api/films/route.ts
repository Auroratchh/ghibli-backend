import { getAllFilms } from "@/lib/ghibliClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const films = await getAllFilms();
    return NextResponse.json(films);
  } catch (error) {
    return NextResponse.json(
      { message: "Error al obtener las películas" },
      { status: 500 }
    );
  }
}