'use client'

import { useRouter } from 'next/navigation'
import { useRef,useState } from 'react'
import { Press_Start_2P } from 'next/font/google'
import Image from 'next/image'

const press = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

type ButtonProps = {
  children: React.ReactNode
  to: string
    className?: string
    blank?: boolean
    copy?: boolean
}

export default function Button({ children, to, className, blank, copy }: ButtonProps) {
  const router = useRouter()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const gifRef = useRef<HTMLImageElement | null>(null)
  const [hidecursor, sethidecursor] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleClick = (e: React.MouseEvent) => {

    const copyText = copy && 'Copied!' 

    sethidecursor(true)

    if (gifRef.current) {
      gifRef.current.style.left = e.clientX - 30 + 'px'
      gifRef.current.style.top = e.clientY - 30 + 'px'
      gifRef.current.style.opacity = '1'

      setTimeout(() => {
        if (gifRef.current) gifRef.current.style.opacity = '0'
      }, 400)
    }

    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/click-coin.mp3')
    }

    const audio = audioRef.current
    audio.currentTime = 0
    audio.play()


    if (copy) {
        navigator.clipboard.writeText(to)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
    }

    audio.onended = () => {
        if (blank) {
            window.open(to, '_blank')
        } else {
            router.push(to)
        }
    }

  }

  return (
    <>
      <Image aria-label='click-gif' ref={gifRef} src="/source.gif" alt="Click effect" width={10} height={10}
      className="fixed pointer-events-none z-50 w-20 h-20 opacity-0 transition-opacity duration-150"/>

      <button onClick={handleClick}
        className={` 
             ${className || ''} ${hidecursor ? 'cursor-none' : ''}`}>
        {copied ? 'Copied!' : children}
      </button>
    </>
  )
}