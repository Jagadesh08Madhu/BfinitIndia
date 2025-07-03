import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Distributor from "../pages/Distributor";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"distributor",
                element:<Distributor/>
            },
            {
                path:"contact",
                element:<Contact />
            }
        ]
    }
])