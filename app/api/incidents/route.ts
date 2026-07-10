import { NextResponse } from "next/server";
import { Incident, incidents } from "./data";



export async function GET(){
    
    return NextResponse.json(incidents);
}


export async function POST(request: Request) {
    const data : Incident = await request.json();

    if (!data.title) {
        return NextResponse.json({ message: "Title is required" }, { status: 400 });
    }

    return NextResponse.json({ message: "Incident created successfully", data });
}