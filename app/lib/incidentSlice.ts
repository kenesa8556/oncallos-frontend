import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"



interface UpdateIncidentPayload {
  id: string;
  severity?: 'low' | 'medium' | 'high';
  status?: 'open' | 'resolved';
}

export type Incident = {
  id: string;
  title: string;
  severity: "low" | "medium" | "high";
 status?: 'open' | 'resolved';

};
type IncidentState = {
  incidents: Incident[];
  loading: boolean;
  error: string | null
}

const initialState: IncidentState = {
  incidents: [],
  loading: false,
  error: null
};

export const fetchIncidents = createAsyncThunk("incident/fetch", async () => {
  const response = await fetch("/api/incidents");
  if (!response.ok) {
    throw new Error("Failed to fetch incidents");
  }
  const data = await response.json();
  return data;
});


const incidentSlice = createSlice({
  name: "incidents",
  initialState,
  reducers: {
    addIncident(state, action: PayloadAction<Incident>) {
        state.incidents.push(action.payload);
      },

    resolveIncident(state, action: PayloadAction<string>) {
        const incident = state.incidents.find((i) => i.id === action.payload);
        if (incident) {
       incident.status = "resolved";
      }},

      updateIncident(state, action: PayloadAction<UpdateIncidentPayload>) {
        const incident = state.incidents.find((i) => i.id === action.payload.id);
        if (incident) {
        if (action.payload.severity) incident.severity = action.payload.severity;
        if (action.payload.status) incident.status = action.payload.status;
  }
}
},

extraReducers: (builder) => {
   builder.addCase(fetchIncidents.pending, (state) => { 
      state.loading = true;
       state.error = null;
       }); 
  builder.addCase(fetchIncidents.fulfilled, (state, action) => {
     state.loading = false;
    state.incidents = action.payload; 
    }); builder.addCase(fetchIncidents.rejected, (state, action) => { 
      state.loading = false;
       state.error = action.error.message ?? "Failed to fetch incidents";
     }); }
  },);

  export const { addIncident, resolveIncident, updateIncident} = incidentSlice.actions;
  export  default incidentSlice.reducer
   