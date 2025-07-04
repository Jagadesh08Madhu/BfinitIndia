import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Distributor from "../pages/Distributor";
import Contact from "../pages/Contact";
import OurTechnologies from "../pages/OurTechnologies";
import NewWhiteLabel from "../pages/NewWhiteLabel/NewWhiteLabel";
import About from "../pages/About";

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
            },
            {
                path:"/our-technologies",
                element:<OurTechnologies/>
            },
            {
                path:"/white-label",
                element:<NewWhiteLabel/>
            },
            {
                path:"/about",
                element:<About />
            }
        ]
    }
])