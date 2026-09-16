import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { NavLink } from "react-router";

const AppSidebar = () => {

    const mainNavigation = [
        {
            title: "Dashboard",
            url: "/",
            //icon: LayoutDashboard,
        },
        {
            title: "Projects",
            url: "/projects",
            //icon: FolderKanban,
        },
        {
            title: "Tasks",
            url: "/tasks",
            //icon: CheckSquare,
        },
        {
            title: "Members",
            url: "/members",
            //icon: Users,
        },
    ]

    return (
        <Sidebar>
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
                        Main
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {mainNavigation.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton>
                                        <NavLink to="/">
                                            {/*<item.icon />*/}
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <a href="">
                                {/* <Settings /> */}
                                <span>Settings</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar;