import Link from "next/link";

export function Nav() {
  return (
    <nav className="bg-gray-800"> 

    <Link href="/">Home</Link>
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/incidents">Incidents</Link>
    </nav>  
  );
};
