import {incidents , Incident}  from "../../api/incidents/data";
import {notFound} from "next/navigation";

export default async function IncidentPage({ params }: { params:Promise<{ id: string }>} ) {

    const { id } = await params;
    const incident =  incidents.find((i) => i.id === id);

    if (!incident) {
        notFound();
        return
    }
       

    return (
        <div>
            <h1>{incident.id}</h1>
            <h1>{incident.title}</h1>
            <p>{incident.severity}</p>
            
        </div>
    );
}