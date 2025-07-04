import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi"; // Arrow icon

const faqData = [
  {
    question: "What makes BFINIT India Hosting unique?",
    answer:
      "We provide hosting bundled with premium tools like spam blockers, login guards, malware scanners, and payroll software – all included for free with your plan.",
  },
  {
    question: "Do I get free gifts with hosting?",
    answer:
      "Yes! Every hosting plan comes with free software tools like Bitss WAP, Bitss C, Bitss VWAR, and Omada Payroll solutions worth up to ₹30,000/year.",
  },
  {
    question: "How does Bitss WAP protect my site?",
    answer:
      "Bitss WAP secures your admin login against hacking, intrusion, and unauthorized access — giving you peace of mind.",
  },
  {
    question: "What does Bitss C do?",
    answer:
      "Bitss C blocks spam from contact forms and prevents junk from entering your inbox.",
  },
  {
    question: "What is Bitss VWAR?",
    answer:
      "Bitss VWAR is a real-time malware scanner that protects your WordPress site from malicious threats and vulnerabilities.",
  },
  {
    question: "What is Omada HR Payroll 10?",
    answer:
      "A powerful tool for small to medium businesses to manage employee salaries, data, and compliance efficiently.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Yes, all hosting plans are flexible and can be upgraded as your needs grow, without downtime.",
  },
];

export default function HostingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-10 bg-[#0F1137] text-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        FAQs – BFINIT India Hosting
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              className="border-b border-gray-600 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown className="text-xl" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-sm"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
