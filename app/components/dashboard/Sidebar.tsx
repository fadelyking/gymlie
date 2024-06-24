export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="hidden xl:flex xl:text-md 2xl:text-lg rounded-2xl overflow-hidden grow drop-shadow-md bg-white max-w-64 h-full p-3 row-span-12 col-span-2">
            {children}
        </div>
    );
}
