import { Settings, CheckSquare, FolderKanban, LayoutDashboard, Users } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { NavLink } from "react-router";

const AppSidebar = () => {

    const mainNavigation = [
        {
            title: "Dashboard",
            url: "/",
            icon: LayoutDashboard,
        },
        {
            title: "Projects",
            url: "/projects",
            icon: FolderKanban,
        },
        {
            title: "Tasks",
            url: "/tasks",
            icon: CheckSquare,
        },
        {
            title: "Members",
            url: "/members",
            icon: Users,
        },
    ]

    return (
        <Sidebar collapsible="none" className="h-svh shrink-0">
            <SidebarHeader>
                <div className="px-2 py-2">
                    <span className="font-semibold">
                        TaskFLow
                    </span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <span>
                            Main
                        </span>
                    </SidebarGroupLabel>
                    
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {mainNavigation.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton render={<NavLink to={item.url} />}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="mt-auto border-0 pb-5">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<NavLink to="/settings" />}>
                            <Settings />
                            <span>Settings</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar;
