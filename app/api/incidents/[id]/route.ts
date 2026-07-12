import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; 

  const { data, error } = await supabase
    .from('incidents')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return NextResponse.json({ message: "Incident not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}