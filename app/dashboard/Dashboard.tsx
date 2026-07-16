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
            <button onClick={fetchIncidents} className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg mb-4">Refresh</button>
            {isLoading && <p className="text-white">Loading...</p>}
            {err && <p className="text-red-400">Error: {err}</p>}
            {incidents && (
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">Incidents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {incidents.map((incident) => (
                        <div key={incident.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                            <h3 className="text-white">{incident.title}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;