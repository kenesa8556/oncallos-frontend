import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex"}}>
            <aside>
                <nav>
                    <ul>
                        <li><Link href="/dashboard">Home</Link></li>
                        <li><Link href="/incidents">Incidents</Link></li>
                        <li><Link href="/dashboard/settings">Settings</Link></li>
                    </ul>
                </nav>
            </aside>
            <main>
                {children}
            </main>
        </div>
    );
}