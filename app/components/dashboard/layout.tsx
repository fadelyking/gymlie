export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-12 grid-rows-12 gap-5">{children}</div>
    );
}
