import { getAllPeople } from "@/lib/ghibliClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const people = await getAllPeople();
    return NextResponse.json(people);
  } catch (error) {
    return NextResponse.json(
      {message: "Error al obtener los personajes" },
      {status: 500}
    );
  }
}