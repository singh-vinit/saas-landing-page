import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative pb-[12rem]">
        <Navbar />
      </section>
      <section className="border border-white pb-[4rem]">
        <Hero />
      </section>
    </div>
  );
}
