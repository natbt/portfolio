'use client'

import Link from "next/dist/client/link";
import { getProjects } from "@/app/lib/getProjects";
import ModalProject from "./ModalProject";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/16/solid";

type Props = {
  selectedProject?: number;
};

type project ={
    id: number
    title: string
    description: string
    link: string
    organization: string
    role: string[]
    pain: string[]
    approach: string[]
    solution: string[]
    impact: string[] | string
}
type Role = "Design System" | "Wireframing" | "Frontend";

export default function Project({ selectedProject }: Props) {
    const projects: project[] = getProjects();
    const sortedProjects = [...projects].sort((a, b) => {
  if (a.id === selectedProject) return -1;
  if (b.id === selectedProject) return 1;
  return 0;
});

    const selectedId = selectedProject;
    const count_designSystem = sortedProjects.filter(p => p.role.includes("Design System")).length;
    const count_wireframing = sortedProjects.filter(p => p.role.includes("Wireframing")).length;
    const count_frontend = sortedProjects.filter(p => p.role.includes("Frontend")).length;

    const roleColors = {
    "Design System": { active: "bg-[#2168E1]", label: "bg-[#2168E1]/90 text-white",outline: " border-[#2168E1] text-[#2168E1]" },
    "Wireframing": { active: "bg-[#A9E01D]",label: "bg-[#A9E01D]/90 text-white",outline: "border-[#A9E01D] text-[#A9E01D]" },
    "Frontend": {active: "bg-[#E0381D]",label: "bg-[#E0381D]/90 text-white",outline: "border-[#E0381D] text-[#E0381D]" }
    };

  return (
  <>
  <div className="flex w-full flex-wrap  items-center  gap-2 md:gap-4 uppercase px-6">
            <div className={"flex justify-center text-sm gap-6 items-center shadow-sm " + roleColors["Design System"].active + " text-white p-4 rounded-md  "}>
            Design System
            <span className="text-4xl font-bold">{ count_designSystem}</span>

            </div>
            <div className={"flex  justify-center text-sm gap-6 items-center shadow-sm  " + roleColors["Wireframing"].active   + " text-white p-4 rounded-md"}>
                Wireframing
                <span className="text-4xl font-bold">{ count_wireframing}</span>
            </div>

            <div className={"flex justify-center text-sm gap-6  items-center shadow-sm " + roleColors["Frontend"].active + " text-white p-4 rounded-md"}>
                Frontend DEVELOPMENT
                <span className="text-4xl font-bold">{ count_frontend}</span>
            </div>
    </div>

  <div className="mt-10 gap-8 px-4 md:px-6 grid grid-cols-1  md:grid-cols-3 justify-center w-full items-center mx-auto mb-6 ">
        
        
      {sortedProjects.map((p) => {
        const impacts = Array.isArray(p.impact) ? p.impact : [p.impact];
        return(
        <div key={p.id} className={`flex flex-col h-full mt-4 p-4 rounded-md bg-white ` + (p.id === selectedId ? " border border-black md:col-span-2 shadow-lg" : 'shadow-md') }>
            <div className={` text-xl  uppercase p-2 rounded-r-md flex items-center gap-2 `+ (p.id === selectedId ? "bg-yellow-200/20 font-black" : "bg-gray-100/80") } >
                {p.id === selectedId && <span className="text-sm  mr-2"><StarIcon className="w-4 h-4 text-amber-400"/> </span>}
                <span className={(p.id === selectedId ? "text-amber-500" : " ")}>{p.title}</span>
                {p.id === selectedId && <span className="text-sm  mr-2"><StarIcon className="w-4 h-4 text-amber-400"/> </span>}
            </div>
            <span className="text-sm mt-3 pl-1 text-zinc-400">{p.organization}</span>

            <div className="flex gap-2 flex-wrap mt-3">
                {p.role.map((i, r) => (
                    <div key={r} 
                    className={ "my-1 text-sm flex justify-center items-center border  px-4 py-1.5 rounded-full whitespace-nowrap "
                     + (p.id === selectedId  ? ((roleColors[i as Role].label || "")) : ((roleColors[i as Role].outline || ""))) }>
                        {i}
                    </div>
                ))}
            </div>
                        {p.id === selectedId && (
                <div className="mt-2 px-2">
                    {impacts[0] && (
                        <span className="text-amber-500">{impacts[0]}</span>
                    )} 
                    <span className="ml-2 text-xs text-zinc-400">(+ more)</span>
                </div>
            )}
            <div className="text-zinc-500 text-xs flex-1 pl-2 mt-3">{p.description}</div>

             <div className="w-full justify-end  flex ">
                    <ModalProject id={p.id} />
                </div>
        </div>
        )
        
})}
    </div>
  </>
  );
}