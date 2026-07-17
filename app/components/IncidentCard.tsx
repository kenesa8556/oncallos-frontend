import Link from "next/link";
import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";

interface Incident {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
}

interface IncidentCardProps {
  incident: Incident;
  showDetailLink?: boolean;
}

export default function IncidentCard({ incident, showDetailLink = false }: IncidentCardProps) {
  return (
    <Card>
      <h3 className="text-white font-semibold mb-2">{incident.title}</h3>
      <Badge severity={incident.severity}>{incident.severity}</Badge>
      {showDetailLink && (
        <Link href={`/incidents/${incident.id}`} className="block mt-3">
          <Button variant="primary">View Detail</Button>
        </Link>
      )}
    </Card>
  );
}