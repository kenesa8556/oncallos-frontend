// app/components/HighSeverityBadge.tsx
"use client";

import { useSelector,useDispatch } from "react-redux";
import {useEffect} from 'react'
import {fetchIncidents} from "@/app/lib/incidentSlice"
import type { AppDispatch} from '../lib/store'
import { selectOpenHighSeverityCount } from "../lib/selectors";


export default function HighSeverityBadge() {
  const count = useSelector(selectOpenHighSeverityCount);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchIncidents());
  }, [dispatch]);

  return <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">{count}</span>;
}