'use client'

// import Image from "next/image";
// import {UserIcon}  from "@heroicons/react/24/solid";
import { Press_Start_2P } from 'next/font/google'
// import Link from "next/dist/client/link";
// import Link from "next/link";
import Button from "@/components/Button";

const press = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="relative flex justify-center h-full items-center gap-6 w-full overflow-hidden">

     <div className="w-full justify-center items-center flex flex-col">
        <div className={`text-center flex items-center gap-2 flex-col text-3xl uppercase ${press.className}`}><span className="capitalize text-lg"> Get to know me </span><span className={`text-2xl uppercase ${press.className}`}>I&apos;m Nattakarn </span> </div>
        {/* <div className='flex '>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3dxenp5djI4bW1tMjlsZnI4M3Y2cDY3MG5xc2l5aDNjY2owNXNuYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EZ5SX3ZYRD05ynKiQQ/giphy.gif" alt="Header Image" />
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGl6d3lxcm5vZmk2eXhuZDE0cjU0bmU2ZXdndXFub2cydGVkbGlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8rN9VXNb7dfU792YQt/giphy.gif" alt="Footer Image" />

        </div> */}
        <div className="mt-4 flex flex-col md:flex-row gap-4 ">
            {/* <Button to="/aboutme" className={`px-4 py-2 border rounded-md hover:uppercase hover:scale-110 hover:text-[#E0381D]  hover:tracking-wider transition-all bg-white ${press.className}`}>
                Contact Me
            </Button>
            <Button to="/projects" className={`px-4 py-2 border rounded-md hover:uppercase hover:scale-110 hover:text-[#E0381D] hover:tracking-wider transition-all bg-white ${press.className}`}>
                Projects
            </Button> */}
            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/5p8i6Pp37EBIqceXmfnrxa?utm_source=generator" width="100%" height="352"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/4EI8VuxUuIHKfafU72emqz?utm_source=generator" width="100%" height="352"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/0kEplasbmZGhmSvotJRqBM?utm_source=generator" width="100%" height="352"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/6tTz1LRQ89JkBdD9iUBPO9?utm_source=generator" width="100%" height="352"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </div>

        <div className='flex flex-col mt-6 gap-4 w-full px-4'>
          <span className={`${press.className}`}>Hobbies</span>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
            <img className='w-full h-full object-cover' src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3BmZjdtczBldzRpcm9lem5wejV1Z2FscHJsenF3eG16ZHc3ZndqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WoWm8YzFQJg5i/giphy.gif" alt="Header Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHY1cXB1bDZidGxrbW5jN29sdjl2N21xMnVueW00NXF0eXgyanpvOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gQJyPqc6E4xoc/giphy.gif" alt="Hobby Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM290eWR3aWY1YjFxMXVseTExbjBqYWwxcXZxb2pwbGF3Y284Y2NpdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TTPi3fB9F5Aqs/giphy.gif" alt="Hobby Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmYxcG43aHd1c21ucHJzNGRod3FmYWtjdnJvdW4zZXMzYXRseWlwcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7DIF9HAz65YE8/giphy.gif" alt="Hobby Image" />
          </div>
        </div>

                <div className='flex flex-col mt-6 gap-4 w-full px-4'>
          <span className={`${press.className}`}>Interesting</span>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODQxbzhzajJzMjJydnRub3o2anRib25icWJoNGFpdGFmd2xyOXRqdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9D8SldWd6lmVbHwRB1/giphy.gif" alt="Header Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXFva3E2dHk5Z3Jub3B4cDVkY2l4ZmMzeTJ0bzRpb3BweGZiZWZjbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EZ5SX3ZYRD05ynKiQQ/giphy.gif" alt="Hobby Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnNxOXBpemJ5bGtoN3R3bGs4aDA0NmV6bXp5MGhuaTZtNnloZTRqcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT0xewI2LTlJwj5hJe/giphy.gif" alt="Hobby Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmhpMjZ0d3p1ZTJmZjgzMHQ3c29jajc0MXkwc2F3YjB0a2xhdzd6biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zAYZOtH5OMhuU/giphy.gif" alt="Hobby Image" />
          </div>
        </div>

                        <div className='flex flex-col mt-6 gap-4 w-full px-4'>
          <span className={`${press.className}`}>Favourite Movies & Series</span>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzU0MDFtZ3I1YTVoNG13d3p1MHo2b2V3N3VxZXV6ZWd4ZHF3dm8yMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c9OQJARyrGuJPgpDYv/giphy.gif" alt="Header Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzBjZ3d2cDZvZDNkZXBsbXM2bTJ6YmIxOTM4OGMwODVmN3A1YjQydiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l44QvFam1JXtKYNna/giphy.gif" alt="Hobby Image" />
            <img className='w-full h-full object-cover' src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2VpaTAxbTFjM2VmenRlNnRtbHRycGtzZTYwZm8wODkxMWltdm4xeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lkhc147nyhF1pEMWWM/giphy.gif" alt="Hobby Image" />
          </div>
        </div>

      </div>

    </div>
  );
}
