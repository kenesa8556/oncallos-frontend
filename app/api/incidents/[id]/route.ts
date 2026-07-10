import { NextResponse } from "next/server";
import { incidents } from "../data";


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id  = params.id;
    
    const incident = incidents.find((i) => i.id === id);
    if (!incident) {
        return NextResponse.json({ message: "Incident not found" }, { status: 404 });
    }
    return NextResponse.json(incident);
}