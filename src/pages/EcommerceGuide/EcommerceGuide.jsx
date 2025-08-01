import useScrollToSection from "../../hooks/useScrollToSection";
import ContactEccom from "./Contact/ContactEccom";
import Guidelines from "./Guidelines/Guidelines";
import Hero from "./Hero/Hero";

const EcommerceGuide = () => {
  const { sectionRef, handleScrollToSection } = useScrollToSection();

  return (
    <main>
      <Hero handleScrollToSection={handleScrollToSection} />
      <Guidelines sectionRef={sectionRef} />
      <ContactEccom />
    </main>
  );
};

export default EcommerceGuide;
