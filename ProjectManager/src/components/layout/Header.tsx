import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme-provider";
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
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <header className="flex h-14 items-center border-b px-4">
            <SidebarTrigger className="md:hidden" />
            <span className="ml-2 font-medium">{pageTitle}</span>

            <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`ml-auto flex items-center rounded-md p-2 transition-transform duration-500 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isDark ? "rotate-180" : "rotate-0"}`}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
                {isDark ? (
                    <Sun className="h-6 w-6 text-yellow-500" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-500" />
                )}
            </button>
        </header>
    )
}

export default Header;
