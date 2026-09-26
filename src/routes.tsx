import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import CategorySelect from "./pages/CategorySelect/CategorySelect"
import WebProjects from "./pages/WebProjects/WebProjects"
import Layout from "./layouts/Layout"
import PageNotFound from "./pages/PageNotFound/PageNotFound"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "mijn-werk", element: <CategorySelect />},
            {path: "web-projecten", element: <WebProjects />},
            {path: "*", element: <PageNotFound />}
        ]
    },
])

export default routers
