import Sidebar from "../shared/Sidebar";
import SidebarItems from "../shared/SidebarItems";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col justify-center p-6 gap-5 max-w-80 mx-auto sm:grid sm:grid-cols-12 sm:min-h-full sm:grid-rows-16 sm:max-w-screen-2xl xl:grid-rows-13">
            <Sidebar>
                <SidebarItems />
            </Sidebar>
            {children}
        </div>
    );
}
