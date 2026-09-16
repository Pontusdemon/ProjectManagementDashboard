import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
    return (
        <header className="flex h-14 items-center border-b px-4">
            <SidebarTrigger className="md:hidden" />
            <span className="ml-2 font-medium">Header</span>
        </header>
    )
}

export default Header;
