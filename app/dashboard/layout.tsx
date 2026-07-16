import Link from "next/link";
import {  HiMenu } from "react-icons/hi"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <aside className=" bg-gray-700 w-64  pt-2 text-white hidden md:flex flex-col items-center gap-3">
                        <Link href="/dashboard" >Home</Link>
                        <Link href="/incidents">Incidents</Link>
                        <Link href="/dashboard/settings">Settings</Link>       
            </aside>
            <div className="flex-1 flex flex-col">
                <div className="md:hidden p-3">
                    <HiMenu className="text-3xl text-white" />
                </div>
               <main className="flex-1 p-2">{children}</main>
            </div>
        </div>
    );
}