import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import logo1 from "../assets/logo/logo1.png";
import logo2 from "../assets/logo/logo2.png";
import logo3 from "../assets/logo/logo3.png";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";
import logo6 from "../assets/logo/logo6.png";
import logo7 from "../assets/logo/logo7.png";
import logo8 from "../assets/logo/logo8.png";
import logo9 from "../assets/logo/logo9.png";
import logo10 from "../assets/logo/logo10.png";
import logo11 from "../assets/logo/logo11.png";
import logo12 from "../assets/logo/logo12.png";
import logo13 from "../assets/logo/logo13.jpg";
import logo14 from "../assets/logo/logo14.png";

const data = [
  {
    title: "Bitss Cyber Security",
    items: [
      { name: "Bitss WAP", link: "https://bitss.fr/products/wap-website-protection/wp" },
      { name: "Bitss C", link: "https://bitss.fr/products/c-contact-form/wp" },
      { name: "Bitss VWAR", link: "https://bitss.fr/products/vwar-frontline/wp" },
    ],
  },
  {
    title: "Database Hosting & Security",
    items: [
      { name: "Data Center", link: "/data-center" },
      { name: "Hosting", link: "/web-hosting" },
      { name: "H Panel", link: "https://hpanel.bfinit.com/login" },
    ],
  },
  {
    title: "Build Business",
    items: [
      { name: "SaaS Software", link: "/saas-software" },
      { name: "White Label", link: "/white-label" },
      { name: "Become a Distributor", link: "/reseller-program" },
      { name: "E-commerce Platform", link: "/bfinit-ecomerce-platform" },
      { name: "E-commerce Guide", link: "/ecommerce-guide" },
    ],
  },
  {
    title: "Expand Business",
    items: [
      { name: "Pensaki Blackboard", link: "https://pensaki.org/" },
      { name: "Omada HR Payroll", link: "https://omada-clasico.com/omada-hr-payroll" },
      { name: "Omada Project Management", link: "https://omada-clasico.com/project-management" },
      { name: "Clasico Payslips", link: "https://omada-clasico.com/clasico-payslip" },
      { name: "Ifgaap Mobile Invoicing", link: "https://ifgaap.org/" },
      { name: "Ifgaap GL Accounting", link: "https://ifgaap.org/" },
    ],
  },
  {
    title: "Social Communication",
    items: [
      { name: "Sosay", link: "https://sosay.org/" },
      { name: "Bobosoho", link: "https://bobosoho.com/" },
    ],
  },
];

const productNames = [
  "Bitss WAP",
  "Bitss C",
  "Bitss VWAR",
  "BFINIT E-commerce",
  "BFINIT hPanel Hosting",
  "BFINIT White Label",
  "Ifgaap GL Accounting",
  "Ifgaap Mobile Invoicing",
  "Omada HR Payroll",
  "Omada Project Manager",
  "Clasico Payslips",
  "Pensaki Blackboard",
  "Bobosoho Mail",
  "Social Network & Business Platform",
];

const Brands = [
  { logo: logo1, heading: "Bitss WAP Login Protection for Website" },
  { logo: logo2, heading: "Bitss C Contact Form for Website" },
  { logo: logo3, heading: "Bitss VWAR Frontline Protection for Device" },
  { logo: logo4, heading: "BFINIT E-commerce" },
  { logo: logo5, heading: "BFINIT hPanel Hosting" },
  { logo: logo6, heading: "BFINIT White Label" },
  { logo: logo7, heading: "Ifgaap GL Accounting" },
  { logo: logo8, heading: "Ifgaap Mobile Invoicing" },
  { logo: logo9, heading: "Omada HR Payroll" },
  { logo: logo10, heading: "Omada Project Manager" },
  { logo: logo11, heading: "Clasico Payslips" },
  { logo: logo12, heading: "Pensaki Blackboard" },
  { logo: logo13, heading: "Bobosoho Mail" },
  { logo: logo14, heading: "Social Network & Business Platform" },
];

export default function OurTechnologies() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <section className="font-plus pt-28 mx-5 lg:mx-20">
      {/* Section Title */}
      <h1
        style={{ letterSpacing: "3px" }}
        className="text-center text-[#5667ff] text-2xl lg:text-4xl font-semibold"
      >
        Our Technologies
      </h1>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {data.map((category, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm p-4 space-y-2"
          >
            <h3 className="text-[#5667ff] font-bold text-lg mb-2">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <a
                    onClick={() => handleClick(item.link)}
                    className="text-black cursor-pointer hover:text-[#5667ff] transition flex items-center justify-between w-full"
                  >
                    {item.name}
                    <span>
                      <FiExternalLink className="text-[#5667ff]" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Explore Our Leading Brands */}
      <div className="mt-20 text-center pb-10">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4">
          Explore Our Leading Brands
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 px-4">
          Each of our brands adds integrated value, offering features that
          benefit both private and business users. We strive to enhance our
          brands, continually adding new technologies to ensure their utility
          remains infinite.
        </p>

        {/* Product Names & Logos */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-start px-4">
          {/* Product Names List */}
          <div className="flex flex-col gap-4 md:w-1/3 text-left">
            {productNames.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <IoIosArrowForward className="text-[#5667ff]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:w-2/3">
            {Brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 flex flex-col items-center text-center transition-all"
              >
                <img
                  src={brand.logo}
                  alt={brand.heading}
                  className="w-20 h-20 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">
                  {brand.heading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
