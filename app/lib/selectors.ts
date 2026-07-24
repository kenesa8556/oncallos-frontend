import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store"


export const selectIncidnets = (state : RootState)=> state.incidents.incidents;

export const selectHighSeverityIncidents = createSelector(
    [selectIncidnets],
    (incidents) =>  incidents.filter((incident)=> incident.severity === "high")
)

export const selectOpenHighSeverityCount = createSelector(
    [selectIncidnets],
    (incidents) =>  incidents.filter((incident)=> incident.status === "open" && incident.severity === "high").length

)