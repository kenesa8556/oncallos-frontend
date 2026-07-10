import IncidentFilter from "./IncidentFilter"

interface Incident {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
}

async function getIncidents(): Promise<Incident[]> {
  return [
    { id: '1', title: 'Server down', severity: 'high' },
    { id: '2', title: 'Slow response times', severity: 'medium' },
    { id: '3', title: 'Minor UI bug', severity: 'low' },
  ];
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
