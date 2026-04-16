import Button from "@/components/Button"
import Project from "@/components/Projects"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/dist/client/link"
export default function Page() {
    return(
        < div className="w-full">

        <div className="mt-4 px-2">
           <Project selectedProject={5} />
           
        </div>
        
        
        </div>
    )
}