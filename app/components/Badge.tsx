type BadgeProps = { 
children: React.ReactNode; 
severity: "low" | "medium" | "high";
 };
 export default function Badge({
 children, severity }: BadgeProps
) { 
const styles: Record<BadgeProps['severity'], string> = {
    low: "bg-green-500 text-white",
    medium: "bg-yellow-600 text-black",
    high: "bg-red-500 text-white",
};
return ( 
        <div 
        className={` px-4 py-2 rounded-lg mt-4 ${styles[severity]} `}
         >
             {children} 
        </div> ); 
        }