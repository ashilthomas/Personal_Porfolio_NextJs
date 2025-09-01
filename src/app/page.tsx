import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  console.log(process.env.EMAIL_USER);
  return (
  <div className="">
    <Hero />
    <AboutPreview/>
    <Skills/>
    <FeaturedProjects/>
    <ContactCTA/>
  </div>
  )
}
