import Sidebar from "../components/dashboard/Sidebar";
import SidebarItems from "../components/dashboard/SidebarItems";
import ContentBlock from "../components/dashboard/ContentBlock";
import RootLayout from "../components/dashboard/layout";
export default function Page() {
    return (
        <RootLayout>
            <Sidebar>
                <SidebarItems />
            </Sidebar>
            <ContentBlock />
        </RootLayout>
    );
}
