import { getPeopleById} from "@/lib/ghibliClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const film = await getPeopleById(params.id);
    return NextResponse.json(film);
  } catch (error) {
    return NextResponse.json(
      { message: "Personaje no encontrado" },
      { status: 404 }
    );
  }
}