export interface Incident {
    id: string;
    title: string;
    severity: 'low' | 'medium' | 'high';
}
export const incidents : Incident[] = [
    { id: "1", title: "Incident 1", severity : "high" },
    { id: "2", title: "Incident 2", severity : "medium" },
    { id: "3", title: "Incident 3", severity : "low" },
];