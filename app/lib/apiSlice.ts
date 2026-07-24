import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Incident } from "./incidentSlice";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getIncidents: builder.query<Incident[], void>({
      query: () => "/incidents",
    }),
  }),
});

export const { useGetIncidentsQuery } = api;