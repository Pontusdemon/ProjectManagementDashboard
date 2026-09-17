import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import Header from "./Header";
import AppSidebar from "./Sidebar";

const MainLayout = () => {
    return (
        <div className="min-h-svh bg-gradient-to-br from-background to-muted">
            <SidebarProvider>
                <AppSidebar />

                <SidebarInset>
                    <main className="flex min-h-screen flex-1 flex-col">
                        <Header />
                        <div className="flex-1">
                            <Outlet />
                        </div>
                    </main>
                </SidebarInset>
            </SidebarProvider>
            
            <footer className="border-t backdrop-blur">
                <div className="container mx-auto px-4 py-12 text-center text-gray-400
                supports-[backdrop-filter]:bg-background/60">
                    <p>
                        Made By Pontusdemon
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default MainLayout;