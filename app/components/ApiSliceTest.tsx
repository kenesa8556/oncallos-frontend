"use client"

import { useGetIncidentsQuery} from "@/app/lib/apiSlice"



export default function ApiSliceTest(){
const  {data, isLoading, error} = useGetIncidentsQuery();


return(
    <>
     { error && <p> something went wrong</p> }

       { isLoading ? 
                  (  <p>wait a minute</p>) :
        ( 
            data?.map((inc) => (
                        <div key={inc.id}>
                            <h1>{inc.title}</h1>
                            <h1>{inc.severity}</h1>
                            <h1>{inc.status}</h1>
                        </div>
                    ))
        )

    }
        
    
    </>

)

}