import Link from "next/link";
import ThemeToggle from "./ThemeToggle"

export function Nav() {
  return (
    <nav className="bg-white dark:bg-gray-800 flex flex-wrap md:gap-6  gap-4 items-center transition p-4 duration-300"> 

        <Link href="/" className="text-gray-900 dark:text-white hover:text-green-400 transition-colors duration-300">Home</Link>
        <Link href="/dashboard" className="text-gray-900 dark:text-white hover:text-green-400 transition-colors duration-300">Dashboard</Link>
        <Link href="/incidents" className="text-gray-900 dark:text-white hover:text-green-400 transition-colors duration-300">Incidents</Link>
        <ThemeToggle />
    </nav>  
  );
};
