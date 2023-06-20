import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Eduction from "@/components/Eduction";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechSkills from "@/components/TechSkills";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-r from-gray-900 to-black text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
      <NavBar/>
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Eduction/>
        <Contact />
        <Footer />
        </div>
    </main>
  );
}
