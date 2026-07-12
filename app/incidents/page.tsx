import IncidentFilter from "./IncidentFilter"

interface Incident {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
}

async function getIncidents(): Promise<Incident[]> {
  const response = await fetch("http://localhost:3000/api/incidents");

  if (!response.ok) {
    throw new Error("Failed to fetch incidents");
  }
  const data = await response.json();

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
