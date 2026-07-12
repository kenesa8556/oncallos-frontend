import IncidentFilter from "./IncidentFilter"
import {supabase} from "../lib/supabase"

interface Incident {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
}

async function getIncidents(): Promise<Incident[]> {
  const { data, error } = await supabase.from('incidents').select('*');

  if (error) {
    throw new Error("Failed to fetch incidents");
  }

  return data;
}



  async function IncidentsPage() {

  const incident : Incident[]  = await getIncidents();

 
  
  return (
          <>
            <IncidentFilter incidents={incident} />
            
        </>
  );

}

export default IncidentsPage;
