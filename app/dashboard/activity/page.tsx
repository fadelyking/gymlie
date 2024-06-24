import Sidebar from "@/app/components/dashboard/Sidebar";
import SidebarItems from "@/app/components/dashboard/SidebarItems";
import RootLayout from "@/app/components/dashboard/layout";

export default function Page() {
    return (
        <RootLayout>
            <Sidebar>
                <SidebarItems />
            </Sidebar>
        </RootLayout>
    );
}
