import  Link  from 'next/link'
export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center px-6 py-12 w-full">

          <h1 className="text-4xl md:text-5x1 font-bold text-white">Welcome to the OnCall App</h1>
          <p className="text-lg text-gray-400 mt-4">This is the home page of the OnCall app.</p>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mt-8 flex">
            <div className="w-2 h-2 rounded-full bg-green-500 m-2"></div>
            <h2 className="text-sm text-gray-300">All systems operational</h2>
          </div>
          <Link href="/dashboard">   
               <button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg mt-8 transition-colors"> View Dashboard</button>
          </Link>
    </div>
    </>
  );
}
