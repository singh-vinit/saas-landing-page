"use client";
import { useTime, useTransform, motion } from "motion/react";

interface Props {
  text: string;
  classname?: string;
}

export default function Tag({ text, classname }: Props) {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(
    rotate,
    (r) => `conic-gradient(from ${r}deg, #000, #000, #84CC16, #000, #000)`
  );
  return (
    <div className={`relative w-fit  ${classname}`}>
      <div className="relative z-1 rounded-full bg-black text-sm text-white font-[400] px-4 py-2">
        ✶ {text}
      </div>
      <motion.div
        className="absolute -inset-[1px] rounded-full bg-clip-border border border-transparent"
        style={{ background: rotatingBg }}
      ></motion.div>
    </div>
  );
}
