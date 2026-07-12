import { NextResponse } from "next/server";
import { Incident } from "./data";
import { supabase } from "../../lib/supabase";



export async function GET(){
    
    const { data, error } = await supabase.from('incidents').select('*');

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}


export async function POST(request: Request) {
    const body: Incident = await request.json();

    if (!body.title) {
        return NextResponse.json({ message: "Title is required" }, { status: 400 });
    }

    const { data, error } = await supabase
        .from('incidents')
        .insert({ title: body.title, severity: body.severity })
        .select();

    if (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Incident created successfully", data }, { status: 201 });
}