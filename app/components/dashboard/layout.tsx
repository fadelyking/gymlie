export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-12 grid-rows-16 gap-5 max-w-screen-2xl mx-auto xl:grid-rows-13">
            {children}
        </div>
    );
}
