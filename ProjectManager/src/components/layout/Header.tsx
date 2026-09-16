import { SidebarTrigger } from "../ui/sidebar";
import { useLocation } from "react-router";

const pageTitles: Record<string, string> = {
    "/": "Dashboard",
    "/projects": "Projects",
    "/tasks": "Tasks",
    "/members": "Members",
    "/settings": "Settings",
};

const Header = () => {
    const { pathname } = useLocation();
    const pageTitle = pageTitles[pathname] ?? "Page not found";

    return (
        <header className="flex h-14 items-center border-b px-4">
            <SidebarTrigger className="md:hidden" />
            <span className="ml-2 font-medium">{pageTitle}</span>
        </header>
    )
}

export default Header;
