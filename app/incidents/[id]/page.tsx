import { Incident}  from "../../api/incidents/data";
import {notFound} from "next/navigation";
import {supabase} from "../../lib/supabase"

export default async function IncidentPage({ params }: { params:Promise<{ id: string }>} ) {

    const { id } = await params;
  const { data, error } = await supabase
    .from('incidents')
    .select('*')
    .eq('id', id)
    .single();;

    if (!data) {
        notFound();
        return
    }
       

    return (
        <div>
            <h1>{data.id}</h1>
            <h1>{data.title}</h1>
            <p>{data.severity}</p>
            
        </div>
    );
}