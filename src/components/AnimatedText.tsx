"use client";
import { useAnimate, motion, stagger, useInView } from "motion/react";
import { useEffect } from "react";

interface Props {
  text: string;
}

export default function AnimatedText({ text }: Props) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { filter: "blur(0px)", y: 0, opacity: 1 },
        { duration: 0.4, delay: stagger(0.08), ease: "easeInOut" }
      );
    } else {
      animate(
        "span",
        { filter: "blur(10px)", y: 10, opacity: 0 },
        { duration: 0.4, ease: "easeInOut" }
      );
    }
  },[isInView, animate])

  return (
    <div
      ref={scope}
      className="max-w-2xl mx-auto text-center"
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          style={{ opacity: 0, filter: "blur(0px)", y: 10 }}
          className="text-white font-bold text-[2.6rem] leading-12"
        >
          {word}
          {" "}
        </motion.span>
      ))}
    </div>
  );
}
