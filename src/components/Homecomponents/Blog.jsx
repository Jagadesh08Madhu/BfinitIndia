import React, { useState } from 'react';
import blog1 from '../../assets/blog/blog1.webp';
import blog2 from '../../assets/blog/blog2.webp';
import blog3 from '../../assets/blog/blog3.webp';
import blog4 from '../../assets/blog/blog4.webp';
import blog5 from '../../assets/blog/blog5.webp';
import blog6 from '../../assets/blog/blog6.webp';

export default function Blog() {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const Blogs = [
  {
    title: "Blazing Fast Web Hosting for Startups",
    content:
      "BFINIT offers lightning-fast web hosting solutions specially crafted for startups and new businesses. With our advanced SSD storage, optimized servers, and CDN integration, your website loads faster than ever, helping you create a strong online presence. The hosting includes a free SSL certificate, one-click app installation, and round-the-clock support to get your business live within minutes. Whether you're launching a portfolio, a blog, or an eCommerce site, BFINIT's startup hosting provides unmatched performance, speed, and reliability from the very beginning.",
    img: blog1
  },
  {
    title: "Cloud Hosting Built for Scalability",
    content:
      "Designed for businesses expecting rapid growth, BFINIT's Cloud Hosting gives you the flexibility to scale your resources on demand. Whether you're facing seasonal traffic spikes or steady growth, our cloud infrastructure automatically adapts to ensure uninterrupted performance. You get load-balanced servers, isolated resources, and real-time monitoring. Our intuitive dashboard makes resource management easy, while robust data protection keeps your business safe. Ideal for eCommerce platforms, CRM tools, and mobile apps, BFINIT Cloud Hosting grows as you grow.",
    img: blog2
  },
  {
    title: "Affordable Shared Hosting Plans",
    content:
      "Perfect for individuals, freelancers, and small businesses, BFINIT's Shared Hosting plans are both powerful and affordable. Enjoy unlimited bandwidth, free email accounts, and intuitive cPanel access to manage everything effortlessly. We provide softaculous integration for quick CMS installs like WordPress, Joomla, and Drupal. Even with a shared environment, we ensure optimal speed, 99.9% uptime, and protection against threats. It's the ideal choice for those who need a reliable, cost-effective solution to establish and maintain their online presence.",
    img: blog3
  },
  {
    title: "High-Performance VPS Hosting",
    content:
      "Step up from shared hosting with BFINIT’s Virtual Private Server (VPS) Hosting. This powerful hosting solution offers dedicated resources, root access, and complete customization. Whether you run complex applications, game servers, or development environments, our VPS is designed to deliver consistent performance. With NVMe SSD storage, KVM virtualization, and multiple OS choices, you get speed, flexibility, and security at a competitive price. We also offer managed VPS options so you can focus on business while we handle the tech.",
    img: blog4
  },
  {
    title: "Secure and Reliable Dedicated Servers",
    content:
      "BFINIT’s Dedicated Server Hosting is engineered for high-traffic websites and enterprise-grade workloads. You’ll receive a complete physical server with full administrative control and isolated resources. This means unmatched performance, custom configurations, and enhanced security for your sensitive applications. Each server comes with RAID protection, DDoS mitigation, and 24/7 monitoring. Whether you're hosting large databases, financial platforms, or ERP systems, BFINIT ensures your business stays online, secure, and lightning fast at all times.",
    img: blog5
  },
  {
    title: "Managed WordPress Hosting",
    content:
      "BFINIT’s Managed WordPress Hosting is tailored for bloggers, marketers, and businesses using WordPress. We take care of everything — from daily backups and malware scans to automatic updates and caching optimization. With server-level performance tuning and integrated CDN, your WordPress site loads at blazing speeds. Our team of WordPress experts is available 24/7 to support your growth and troubleshoot issues. Enjoy worry-free hosting that lets you focus on content, creativity, and audience engagement while we manage the backend.",
    img: blog6
  }
];


    return (
        <section className="mx-5 lg:mx-20 font-plus py-7 lg:py-14">
            <h1 className="text-2xl text-center lg:text-4xl font-semibold mb-6">Recent Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Blogs.map((blog, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg">
                        <img className="h-[250px] w-full object-cover rounded" src={blog.img} alt={blog.heading} />
                        <h2 className="text-lg font-semibold mt-4">{blog.heading}</h2>
                        <p style={{wordSpacing:'5px'}} className="text-gray-600 mt-2 leading-relaxed">{`${blog.content.split(" ").slice(0, 50).join(" ")}...`}</p>
                        <button
                            className="text-blue-500 underline mt-2"
                            onClick={() => setSelectedBlog(blog)}
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            {/* Overlay/Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg h-[70vh]  overflow-x-scroll relative">
                        <button
                            className="absolute top-2 right-3 text-5xl text-red-500"
                            onClick={() => setSelectedBlog(null)}
                        >
                            &times;
                        </button>
                        <img className="h-[250px] w-full object-cover rounded" src={selectedBlog.img} alt={selectedBlog.heading} />
                        <h2 className="text-xl font-bold mt-4">{selectedBlog.heading}</h2>
                        <p className="text-gray-700 mt-2">{selectedBlog.content}</p>
                        <button
                            className=" text-lg text-white bg-red-500 px-5 py-1 rounded-2xl mt-5"
                            onClick={() => setSelectedBlog(null)}
                        >
                           Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
