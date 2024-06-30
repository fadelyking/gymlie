import ActivityTableBlock from "@/app/components/activity/ActivityTableBlock";
import RootLayout from "@/app/components/dashboard/layout";
import Sidebar from "@/app/components/shared/Sidebar";
import SidebarItems from "@/app/components/shared/SidebarItems";

export default function Page() {
    return (
        <RootLayout>
            <Sidebar>
                <SidebarItems />
            </Sidebar>
            <ActivityTableBlock />
        </RootLayout>
    );
}
