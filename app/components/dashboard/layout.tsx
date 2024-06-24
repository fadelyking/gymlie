export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-5 mx-auto sm:grid sm:grid-cols-12 sm:h-full sm:grid-rows-16 sm:gap-5 max-w-80 sm:max-w-screen-2xl xl:grid-rows-13">
            {children}
        </div>
    );
}
