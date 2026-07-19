import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import LowLevel from "@/components/LowLevel";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Verify from "@/components/Verify";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="wrap">
        <Hero />
        <Experience />
        <Projects />
        <LowLevel />
        <Stack />
        <Education />
        <Verify />
      </main>
      <Footer />
    </>
  );
}
