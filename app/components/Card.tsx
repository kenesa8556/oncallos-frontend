
type CardProps = {
  children: React.ReactNode;
  
};
export default function Card({
  children,
}: CardProps) {
  
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
      {children}
    </div>
  );
}