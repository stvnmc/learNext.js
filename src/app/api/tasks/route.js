import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("creando tareas");
}

export async function POST(req) {
  const { title, description } = await req.json(); // Asegúrate de parsear el body del request
  // Aquí puedes agregar lógica para manejar la creación de una nueva tarea
  return NextResponse.json({ message: "Tarea creada", title, description });
}
