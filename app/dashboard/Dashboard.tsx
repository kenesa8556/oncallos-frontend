"use client"

import { Incident } from "../api/incidents/data";

import { useEffect, useState } from "react";
import Button from "../components/Button"
import Card from "../components/Card"
import Badge from "../components/Badge"



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
            <Button onClick={fetchIncidents} variant="secondary">Refresh</Button>
            {isLoading && <p className="text-white">Loading...</p>}
            {err && <p className="text-red-400">Error: {err}</p>}
            {incidents && (
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">Incidents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {incidents.map((incident) => (
                        <Card key={incident.id}> 
                        
                            <h3 className="text-white font-semibold mb-2">{incident.title}</h3>
                            <Badge severity={incident.severity}> {incident.severity}</Badge>
                        </Card>
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;