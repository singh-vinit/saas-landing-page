import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Introduction from "@/section/Introduction";
import Features from "@/section/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative pb-[12rem]">
        <Navbar />
      </section>
      <section className="pb-[4rem]">
        <Hero />
      </section>
      <section className="py-10">
        <LogoTicker />
      </section>
      <Introduction />
      <Features />
    </div>
  );
}
