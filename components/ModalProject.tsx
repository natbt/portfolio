"use client";

import { getProjects } from "@/app/lib/getProjects";
import PaperClipIcon from "@heroicons/react/24/solid/esm/PaperClipIcon";
import Link from "next/dist/client/link";
import { useState } from "react";

type project = {
  id: number;
  title: string;
  description: string;
  link: string;
  organization: string;
  role: string[];
  pain: string[];
  approach: string[];
  solution: string[];
  impact: string[] | string;
};

export default function ModalProject({ id }: { id: number }) {
  const project = getProjects().find((p) => p.id === id);
  const [open, setOpen] = useState(false);

  return (
    <>
        <div className="border-t w-full justify-end text-end border-zinc-200 flex gap-3">
            {project?.link && (
                <button className="bg-white border mt-3 px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300 text-xs rounded-sm">
                    <Link className="ml-auto flex items-center gap-1" href={project.link} target="_blank" rel="noopener noreferrer">
                        <PaperClipIcon className="h-4 w-4" />Open Link
                    </Link>
                </button>
                    
            )}
            <button onClick={() => setOpen(true)} className="bg-white border mt-3 px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300 text-xs rounded-sm"> 
                More Details
                </button>
        </div>
      {open && (
        <div className="fixed overflow-y-auto  inset-0 bg-black/30 flex items-start justify-center z-50" onClick={() => setOpen(false)}
        >
          <div className="bg-white p-6 rounded-lg my-4 w-11/12" onClick={(e) => e.stopPropagation()} >

            {project && (
              <div className="space-y-4">
                <div className="flex border-b pb-2 border-gray-100">
                    <div className="text-lg font-bold uppercase flex-1 flex items-center">{project.title}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ml-2 text-sm text-blue-500 hover:underline">
                                <PaperClipIcon className="h-4 w-4 inline-block" /> open link
                            </a>)}

                    </div>
                    <button onClick={() => setOpen(false)} className=" mb-2 text-sm text-gray-500 justify-end flex">X</button>
                </div>

                <div>
                  <div className="text-sm font-medium uppercase">Organization</div>
                  <span className="text-neutral-500">
                    {project.organization}
                  </span>
                </div>   

                <div>
                  <div className="text-sm font-medium uppercase">Overview</div>
                  <span className="text-neutral-500">
                    {project.description}
                  </span>
                </div>                
                
                <div>
                  <div className="text-sm font-medium uppercase">Pain</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.pain.map((i, r) => (
                      <li key={r} className="text-neutral-500 text-sm">{i}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-medium uppercase">Approach</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.approach.map((i, r) => (
                      <li key={r} className="text-neutral-500 text-sm">{i}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-medium uppercase">Solution</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.solution.map((i, r) => (
                      <li key={r} className="text-neutral-500 text-sm">{i}</li>
                    ))}
                  </ul>
                </div>

                                <div>
                  <div className="text-sm font-medium uppercase">Impact</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.impact.map((i, r) => (
                      <li key={r} className="text-neutral-500 text-sm">{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}