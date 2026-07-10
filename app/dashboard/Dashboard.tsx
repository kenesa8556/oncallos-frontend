"use client"

import { Incident } from "../api/incidents/data";

import { useEffect, useState } from "react";


function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [incidents, setIncidents] = useState<Incident[] | null>(null);
    const [err, setErr] = useState<string | null>(null);

const fetchIncidents = async () => {
        try {

       
            const response = await fetch("/api/incidents");
            if (!response.ok) {
                throw new Error("Failed to fetch incidents");
            }
            const data = await response.json();
            setIncidents(data);
        }
        catch(error) {
            setErr(error instanceof Error ? error.message : "An unknown error occurred");
        
        } finally {
            setIsLoading(false);
        }
    }



    useEffect(() => {
        fetchIncidents();
         
    },[])

    return (
        <div>
            <button onClick={fetchIncidents}>Refresh</button>
            {isLoading && <p>Loading...</p>}
            {err && <p>Error: {err}</p>}
            {incidents && (
                <div>
                    <h2>Incidents</h2>
                    {incidents.map((incident) => (
                        <div key={incident.id}>
                            <h3>{incident.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dashboard;