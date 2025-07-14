import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Distributor from "../pages/Distributor";
import Contact from "../pages/Contact";
import OurTechnologies from "../pages/OurTechnologies";
import NewWhiteLabel from "../pages/NewWhiteLabel/NewWhiteLabel";
import About from "../pages/About";
import DataCenter from "../pages/NewDataCenter/NewDataCenter";
import SassSoftware from "../pages/SassSoftware/SassSoftware";
import Reseller from "../pages/Reseller/Reseller";
import ECommerceDetails from "../pages/ECommerceDetails/ECommerceDetails";
import EcommerceGuide from "../pages/EcommerceGuide/EcommerceGuide";
import OurBrands from "../pages/OurBrands/OurBrands";
import Career from "../pages/Career";
import Hardwares from "../pages/Hardwares/Hardwares";
import WebHosting from "../pages/WebHosting/WebHosting";
import VpsHosting from "../pages/VpsHosting/VpsHosting";
import DedicatedServer from "../pages/DedicatedServer/DedicatedServer";
import CustomVps from "../pages/Hosting/CustomVps/CustomVps";
import StarterWebPack from "../pages/StarterWebPack/StarterWebPack";
import CookiePolicy from "../pages/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";


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
                path:"/distributor",
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
            },
            {
                path:"/data-center",
                element:<DataCenter/>
            },
            {
                path:"/saas-software",
                element:<SassSoftware />
            },
            {
                path:"/reseller-program",
                element:<Reseller />
            },
            {
                path:"/bfinit-ecomerce-platform",
                element:<ECommerceDetails />
            },
            {
                path:"/ecommerce-guide",
                element:<EcommerceGuide />
            },
            {
                path:"/our-brands",
                element:<OurBrands />
            },
            {
                path:"/career",
                element:<Career />
            },
            {
                path:"/hardwares",
                element:<Hardwares />
            },
            {
                path:"/web-hosting",
                element:<WebHosting />
            },
            {
                path:"/vps-hosting",
                element:<VpsHosting/>
            },
            {
                path:"/dedicated-server",
                element:<DedicatedServer />
            },
            {
                path:"/custom-vps",
                element:<CustomVps />
            },
            {
                path:"/starter-web-pack",
                element:<StarterWebPack />
            },
            {
                path:"/cookie-policy",
                element:<CookiePolicy />
            },
            {
                path:"/privacy-policy",
                element:<PrivacyPolicy />
            },
            {
                path:'/terms-and-conditions',
                element:<TermsAndConditions />
            }
        ]
    }
])