import Tag from "@/components/Tag";
import FeatureCard1 from "@/components/FeatureCard-1";
import FeatureCard2 from "@/components/FeatureCard-2";
import FeatureCard3 from "@/components/FeatureCard-3";

export default function Features() {
  return (
    <section className="p-10">
      <Tag text="features" classname="uppercase mx-auto mb-10" />
      <p className="font-bold text-4xl text-center text-white uppercase mb-10">
        where power meets <span className="text-lime-400">simplicity</span>
      </p>
      <div className="flex justify-evenly">
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
      </div>
    </section>
  );
}
