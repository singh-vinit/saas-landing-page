import Tag from "@/components/Tag";
import AnimatedText from "@/components/AnimatedText";

const text = `your creative process deserves better. You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.
That's why we build Layers.`;

export default function Introduction() {
  return (
    <section className="py-10">
      <Tag
        text="introducing layers"
        classname="uppercase mx-auto mb-10"
      />
      <AnimatedText text={text} />
    </section>
  );
}
