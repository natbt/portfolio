import { HeartIcon } from "@heroicons/react/16/solid"
import { Press_Start_2P } from "next/font/google"

const press = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
    return(
            <div className={`w-full text-xs flex items-center justify-center gap-3 text-center py-4 text-sm border-t border-zinc-100/90 mt-10 ${press.className}`}>
                I <HeartIcon className="inline-block w-5 h-5 text-red-500" /> YOU
        </div>
    )
}