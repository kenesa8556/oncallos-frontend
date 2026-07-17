"use client"

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import IncidentCard from "../components/IncidentCard"

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
        <select onChange={handle} className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 m-3">
            {
            ['all', 'low', 'medium', 'high'].map((severity) => {
                return <option key={severity} value={severity}>{severity}</option>
            })
        }
        </select>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3 md:gap-6">

        {

            filteredIncidents.map((inc) => {
              return (
                <IncidentCard key={inc.id} showDetailLink={true} incident={inc}/>
              );
            })
          }
        </div>


        
        </>
    )
}

export default IncidentFilter;