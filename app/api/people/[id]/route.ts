import { getPeopleById } from "@/lib/ghibliClient";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const person = await getPeopleById(id);
    return NextResponse.json(person);
  } catch (error) {
    return NextResponse.json(
      { message: "Personaje no encontrado" },
      { status: 404 }
    );
  }
}