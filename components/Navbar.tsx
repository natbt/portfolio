'use client'
import { Press_Start_2P } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SparklesIcon } from "@heroicons/react/16/solid"

const press = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})


export default function Navbar() {
    const pathname = usePathname()
    const navItems = (href : string, label: string) => {
        const isActive = pathname === href
        return(
            <Link href={href} className={`text-xs md:text-base flex items-center gap-1 hover:uppercase hover:scale-110 hover:tracking-wider transition-all ${isActive ? "scale-110 text-fuchsia-500 tracking-wider" : "text-zinc-300 text-sm"}`}>
                {isActive && <SparklesIcon className="w-6 h-6 text-fuchsia-500 inline-block mr-1"/>}
                {label}
            </Link>
        )
    }
    return(
        <div className={`flex border-b border-zinc-100/90 mb-4 w-full z-50 bg-transparent top-0 uppercase p-4 justify-end gap-8 sticky bg-white/80 backdrop-blur-sm ${press.className}`}>
            <div className=" flex-1 flex items-center">{navItems("/", "Home")}</div>
            {/* <Link href="/projects">Files</Link> */}
            {navItems("/projects", "See my work")}
            {navItems("/aboutme", "Contact and CV")}
        </div>
    )
    
}