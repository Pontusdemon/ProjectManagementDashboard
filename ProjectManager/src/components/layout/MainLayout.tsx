import Header from "./Header";

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">

            <Header />
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