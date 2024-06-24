export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-12 sm:grid-rows-16 sm:gap-5 max-w-80 sm:max-w-screen-2xl mx-auto xl:grid-rows-13">
            {children}
        </div>
    );
}
