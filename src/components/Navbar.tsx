"use client";
import Logo from "../../public/logo.svg"
import Image from "next/image"
import Button from "./Button"
import {motion} from "motion/react"
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav 
        className="fixed top-10 left-[15%] flex justify-between items-center w-[70%] p-2 rounded-full border border-gray-500/45 backdrop-blur-3xl"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{duration: 1, ease: "easeInOut", type: "spring", bounce: 0.4}}
        >
            <Image src={Logo} alt="logo" className="w-30 h-10"/>
            <ul className="flex gap-4 text-white font-semibold text-[16px]">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Features</Link></li>
                <li><Link href="/contact">Integrations</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
            </ul>
            <div className="flex gap-x-4">
                <Button text="Login" className="border-2 border-white bg-black text-white"/>
                <Button text="Signup" className="border-2 border-white bg-lime-400 text-black"/>
            </div>
        </motion.nav>
    )
}