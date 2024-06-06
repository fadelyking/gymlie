export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex rounded-2xl drop-shadow-md bg-white max-w-64 h-full p-5 row-span-12 col-span-2">
            {children}
        </div>
    );
}
