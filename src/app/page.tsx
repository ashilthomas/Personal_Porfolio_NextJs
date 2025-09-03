import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";
import Education from "@/components/sections/Education";
import ClickToTop from "@/components/ui/ClickToTop";

export default function Home() {
  console.log(process.env.EMAIL_USER);
  return (
  <div className="">
    <Hero />
    <AboutPreview/>
    <Skills/>
  
    <FeaturedProjects/>
      <Education/>
    <ContactCTA/>
    <ClickToTop/>
  </div>
  )
}
