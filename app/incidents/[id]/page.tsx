import { Incident}  from "../../api/incidents/data";
import {notFound} from "next/navigation";
import {supabase} from "../../lib/supabase"
import Badge from "../../components/Badge"
import Card from "../../components/Card"

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
    <div className="p-6">
        <Card>
            <h1 className="text-white text-xl font-bold mb-1">{data.title}</h1>
            <p className="text-gray-400 text-sm mb-3">ID: {data.id}</p>
            <Badge severity={data.severity}>{data.severity}</Badge>
        </Card>
    </div>
);
}