"use client";
import { motion } from "motion/react";
import { Fragment } from "react";

const logos = [
  { name: "1Password" },
  { name: "ActiveCampaign" },
  { name: "Adalo" },
  { name: "Airtable" },
  { name: "AppleMusic" },
  { name: "Asana" },
  { name: "Coinbase" },
];

export default function LogoTicker() {
  return (
    <div className="w-[80%] mx-auto">
      <p className="capitalize text-center text-2xl font-bold text-lime-400 mb-10">trusted by</p>
      <div className="flex overflow-hidden mask-l-from-60% mask-l-to-100% mask-r-from-60% mask-r-to-100%">
        <motion.div
          className="flex flex-none gap-24"
          animate={{ x: "-50%" }}
          transition={{
            duration: 24,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {logos.map((e) => (
                <span key={e.name} className="text-3xl font-bold text-white">
                  {e.name}
                </span>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
