export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex rounded-2xl drop-shadow-md bg-white max-w-64 h-full p-5">
            {children}
        </div>
    );
}
