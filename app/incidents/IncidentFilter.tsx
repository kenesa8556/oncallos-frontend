"use client"

import Link from "next/link";
import { ChangeEvent, useState } from "react";
interface Incident {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
}

interface IncidentFilterProps {
    incidents: Incident[];
}

function IncidentFilter({incidents}: IncidentFilterProps) {
    const [filterer, setFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');
    const filteredIncidents = incidents.filter((inc) => {
        return filterer == "all" ? true : inc.severity === filterer;
    });



   const handle = (event: ChangeEvent<HTMLSelectElement>) =>{
   setFilter(event.target.value as 'all' | 'low' | 'medium' | 'high');
   }

   


    return(
        <>
        <select onChange={handle}>
            {
            ['all', 'low', 'medium', 'high'].map((severity) => {
                return <option key={severity} value={severity}>{severity}</option>
            })
        }
        </select>

        {

            filteredIncidents.map((inc) => {
              return (
                <div key={inc.id}>
                  <h1>{inc.title}</h1>
                  <h1>{inc.severity}</h1>
                  <Link href={`/incidents/${inc.id}`}>View Details</Link>
                </div>
              );
            })
          }

        
        </>
    )
}

export default IncidentFilter;