'use client'
import { Incident} from "@/app/lib/incidentSlice"
import {useSelector, useDispatch} from "react-redux"
import type { RootState } from "@/app/lib/store";
import {useEffect} from "react"
import type { AppDispatch } from '@/app/lib/store'
import {resolveIncident, addIncident, fetchIncidents} from "@/app/lib/incidentSlice"

export default function IncidentSliceTest(){

    const dispatch = useDispatch<AppDispatch>();
    const incidents = useSelector(
         (state: RootState) => state.incidents.incidents
        );
    const error = useSelector(
         (state: RootState) => state.incidents.error
        );
        const loading = useSelector(
         (state: RootState) => state.incidents.loading
        );;
    


useEffect(()=>{
    dispatch(fetchIncidents())
},[dispatch])
    const handleAdd= ()=>{
        dispatch(
            addIncident({
                id: "1",
                title: "Server Down",
                severity: "high",
                status: "open",
            })
        );
    }
    const handleResolve = () => {
    if (incidents.length > 0) {
        dispatch(resolveIncident(incidents[0].id));
    }
};

    
        
         if(incidents.length > 0
         ) {
            return(
                <div>
                <button  onClick={handleAdd}> add new</button>
                <button  onClick={()=>dispatch(fetchIncidents())}>Refetch</button>
                <p>{error}</p>
                <button onClick={handleResolve}>Resolve First</button>
                
                    {loading ? (
                        <p>wait a minute</p>
                        ) : (
                    incidents.map((inc) => (
                        <div key={inc.id}>
                            <h1>{inc.title}</h1>
                            <h1>{inc.severity}</h1>
                            <h1>{inc.status}</h1>
                        </div>
                    ))
                    )}
                </div>
            )
        }
        else
        {
            return(
                <>
                <button  onClick={handleAdd}> add new</button>
                </>
            )
        }
        
        
    
    

        
        
              
        
    
    

}