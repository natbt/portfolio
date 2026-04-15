import { PhoneIcon,EnvelopeIcon,ChevronLeftIcon,ChevronRightIcon,MapPinIcon } from "@heroicons/react/24/solid"
// import { PhoneIcon,EnvelopeIcon,ChevronLeftIcon,ChevronRightIcon,MapPinIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { Press_Start_2P } from 'next/font/google'
import Button from "@/components/Button";

const press = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {
    return(
    <div className=" flex flex-col gap-6  md:w-full w-full md:mx-auto h-[80vh] justify-center items-center
    ">
        <span className={` uppercase ${press.className}`}>Let’s work together</span>

        <div className="border flex flex-col px-4 md:px-10 py-6 rounded-lg gap-6 text-zinc-500 shadow-lg border-zinc-100/90
        bg-radial from-[#EEAECA]/50 via-[#EEAECA]/50 to-[#94BBE9]">
            <div className="flex flex-col gap-3">
            <div className="flex gap-2 md:gap-6 w-full items-center">
                <PhoneIcon style={{width: '20px', height: '20px',opacity: 0.5}} /> 
                :
                <span className="flex-1">+66 94 491 1825</span>
                <Button to="+66 94 491 1825" copy className="ml-4 text-sm px-2 py-1 border shadow-sm bg-white/30 text-zinc-500 border-white/50 rounded-md hover:uppercase hover:scale-110  hover:bg-fuchsia-100/50 hover:tracking-wider transition-all">
                    copy
                </Button>
            </div>
            <div className="flex gap-2 md:gap-6 w-full items-center">
                <EnvelopeIcon style={{width: '20px', height: '20px',opacity: 0.5}}/> :
                <span className="flex-1">bt.nattakarn@gmail.com</span>
                <Button to="bt.nattakarn@gmail.com" copy className="ml-4 text-sm px-2 py-1 border shadow-sm bg-white/30 text-zinc-500 border-white/50 rounded-md hover:uppercase hover:scale-110  hover:bg-fuchsia-100/50 hover:tracking-wider transition-all">
                    copy
                </Button>
            </div>
            <div className="flex gap-2 md:gap-6 w-full items-center">
                <MapPinIcon style={{width: '20px', height: '20px',opacity: 0.5}}/> 
                :
                <span className="flex-1">Bangkok & Rayong, Thailand</span>
                
            </div>
                    
        </div>

        <div className="flex gap-4 justify-between items-center">
            <Button to="/CV-Nattakarn.pdf" download className="px-2 py-1.5 text-zinc-500 border shadow-sm bg-white/30 border-white/50 text-sm rounded-md hover:uppercase hover:scale-110  hover:bg-fuchsia-100/50 hover:tracking-wider transition-all">
                Download CV
            </Button>
            <Button to="https://www.linkedin.com/in/nattakarn-baothong" blank className="px-2 py-1.5 text-zinc-500 border shadow-sm bg-white/30 border-white/50 text-sm rounded-md hover:uppercase hover:scale-110  hover:bg-fuchsia-100/50 hover:tracking-wider transition-all">
                Go to LinkedIn
            </Button>
            <Button to="https://github.com/natbt" blank className="px-2 py-1.5 text-sm border rounded-md shadow-sm text-zinc-500 bg-white/30 border-white/50  hover:uppercase hover:scale-110  hover:bg-fuchsia-100/50 hover:tracking-wider transition-all">
                Go to GitHub
            </Button>

        </div>

        </div>

        
        
        
    </div>
    )
    
}