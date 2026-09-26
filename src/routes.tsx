import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import CategorySelect from "./pages/CategorySelect/CategorySelect"
import WebProjects from "./pages/WebProjects/WebProjects"
import Layout from "./layouts/Layout"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import DesignProjects from "./pages/DesignProjects/DesignProjects"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "mijn-werk", element: <CategorySelect />},
            {path: "web-projecten", element: <WebProjects />},
            {path: "design-projecten", element: <DesignProjects />},
            {path: "*", element: <PageNotFound />}
        ]
    },
])

export default routers
