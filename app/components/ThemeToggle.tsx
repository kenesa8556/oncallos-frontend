"use client"

import {useEffect, useState} from "react"


export default function ThemeToggle(){
    const [dark,setDark] = useState(false)

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", dark);

    },[dark])
    
    return <button onClick={()=> setDark(!dark)} className="text-gray-900 dark:text-white">Toggle Theme</button>;
}