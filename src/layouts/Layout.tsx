import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

export default function Layout() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left:0,
            behavior: "instant"}
        )
    }, [useLocation()])

    const currentPath = useLocation().pathname

    useEffect(() => {
        const route = currentPath.startsWith("/web") ? "web"
        : currentPath.startsWith("/design") ? "design"
        : "home"

        document.body.dataset.route = route
    }, [currentPath])


    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
