import Sidebar from "../components/shared/Sidebar";
import SidebarItems from "../components/shared/SidebarItems";
import ContentBlock from "../components/dashboard/DashboardContentBlock";
import RootLayout from "../components/dashboard/layout";
export default function Page() {
    return (
        <RootLayout>
            <ContentBlock />
        </RootLayout>
    );
}
