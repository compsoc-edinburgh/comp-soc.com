'use client'

import Image from 'next/image'
import { prefix } from '@/utils/prefix'
import { Sponsor } from '@/types/sponsor'
import React, { useRef, useState, useEffect } from 'react'
import { ArrowUpRight } from 'iconoir-react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimation,
  MotionValue,
} from 'framer-motion'
import Link from 'next/link'

interface SponsorCardProps {
  sponsor: Sponsor
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, tier }) => {
  return (
    <div className="grid w-full place-content-center px-4">
      <TiltCard sponsor={sponsor} tier={tier} />
    </div>
  )
}

const ROTATION_RANGE = 32.5
const HALF_ROTATION_RANGE = 32.5 / 2

interface TiltCardProps {
  sponsor: Sponsor
}

const TiltCard: React.FC<SponsorCardProps> = ({ sponsor, tier }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 })

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const controls = useAnimation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rX = ((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1
    const rY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true)
      controls.start({ scale: 1.05 })
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      x.set(0)
      y.set(0)
      setIsHovered(false)
      controls.start({ scale: 1 })
    }
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (isFlipped) {
      x.set(0)
      y.set(0)
    }
  }

  const diagonalMovement = useTransform<number, number>(
    [xSpring, ySpring],
    (latest: number[]) => latest[0] + latest[1]
  )
  const sheenPosition = useTransform(
    diagonalMovement,
    [-ROTATION_RANGE, ROTATION_RANGE],
    [-150, 250]
  )

  const sheenOpacity = useTransform(
    sheenPosition,
    [-150, 0, 100, 250],
    [0, 0.1, 0.2, 0]
  )

  const sheenGradient = useMotionTemplate`
    linear-gradient(
      55deg,
      transparent,
      rgba(255, 255, 255, ${sheenOpacity}) ${sheenPosition}%,
      transparent
    )
  `

  useEffect(() => {
    let animationFrameId: number

    const animateIdle = () => {
      sheenPosition.set(Math.sin(Date.now() / 800) * 200 + 50)

      animationFrameId = requestAnimationFrame(animateIdle)
    }

    if (!isHovered && !isFlipped) {
      animateIdle()
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered, isFlipped, sheenPosition])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: isMobile ? 'none' : transform,
      }}
      className={`relative cursor-pointer ${
        isMobile ? 'h-52 w-72' : 'h-60 w-80'
      }`}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        <CardFront
          tier={tier}
          sponsor={sponsor}
          isFlipped={isFlipped}
          sheenGradient={sheenGradient}
          isHovered={isHovered}
          x={x}
          y={y}
        />
        <CardBack
          tier={tier}
          sponsor={sponsor}
          isFlipped={isFlipped}
          sheenGradient={sheenGradient}
          isHovered={isHovered}
          x={x}
          y={y}
        />
      </motion.div>
    </motion.div>
  )
}

interface CardProps extends SponsorCardProps {
  isFlipped: boolean
  sheenGradient: MotionValue<string>
  isHovered: boolean
  x: MotionValue<number>
  y: MotionValue<number>
}

const CardFront: React.FC<CardProps> = ({
  sponsor,
  tier,
  isFlipped,
  sheenGradient,
  isHovered,
  x,
  y,
}) => {
  const bgColor = getTierColor(tier)
  return (
    <motion.div
      style={{
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      className="z-10 absolute w-full h-full rounded-xl overflow-hidden border border-white border-opacity-20"
    >
      <motion.div
        style={{
          backgroundImage: sheenGradient,
          opacity: 0.7,
        }}
        className="z-10 absolute inset-0"
      />
      <motion.div
        style={{
          backgroundImage: sheenGradient,
        }}
        className={`z-10 absolute inset-0 ${bgColor}`}
      />
      {(tier === 'platinum' || tier === 'gold') && (
        <HolographicMesh tier={tier} isHovered={isHovered} x={x} y={y} />
      )}
      <div className="z-10 absolute inset-4 flex items-center justify-center overflow-hidden">
        <Image
          loading="lazy"
          height={100}
          width={225}
          src={`${prefix}/sponsors/${sponsor.img}`}
          alt={sponsor.name}
        />
        {isHovered && (
          <p className="text-sm text-gray-300 font-space-mono absolute bottom-2 left-0 right-0 text-center">
            Click to flip!
          </p>
        )}
      </div>
    </motion.div>
  )
}

const CardBack: React.FC<CardProps> = ({
  sponsor,
  tier,
  isFlipped,
  sheenGradient,
  isHovered,
  x,
  y,
}) => {
  const bgColor = getTierColor(tier)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent the card from flipping when clicking the link
  }

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true)
  }

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false)
  }

  return (
    <motion.div
      style={{
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: sheenGradient,
      }}
      className={`z-50 ${bgColor} border border-white border-opacity-20 absolute w-full h-full rounded-xl overflow-hidden text-white flex flex-col justify-center items-center p-6`}
    >
      <p className="text-center relative z-10 font-tomorrow mb-6">
        {sponsor.description}
      </p>

      {sponsor.shortlink && (
        <a href={sponsor.shortlink} target="_blank" rel="noopener noreferrer">
          <motion.a
            onClick={handleLinkClick}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`z-50 inline-flex items-center px-6 py-4 rounded-full text-white transition-colors duration-200 ${
              isButtonHovered
                ? 'bg-white bg-opacity-50'
                : 'bg-white bg-opacity-20'
            }`}
          >
            Visit website <ArrowUpRight className="ml-2" />
          </motion.a>
        </a>
      )}
    </motion.div>
  )
}
interface HolographicMeshProps {
  tier: 'platinum' | 'gold'
  isHovered: boolean
  x: MotionValue<number>
  y: MotionValue<number>
}

const HolographicMesh: React.FC<HolographicMeshProps> = ({
  tier,
  isHovered,
  x,
  y,
}) => {
  const meshX = useTransform(
    x,
    [-HALF_ROTATION_RANGE, HALF_ROTATION_RANGE],
    [20, -20]
  )
  const meshY = useTransform(
    y,
    [-HALF_ROTATION_RANGE, HALF_ROTATION_RANGE],
    [20, -20]
  )

  const hueRotate = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    })
  }, [controls])

  return (
    <motion.div
      style={{
        backgroundImage: useMotionTemplate`
          linear-gradient(${meshX}deg, rgba(0, 255, 255, 0.2) 0%, rgba(255, 0, 255, 0.2) 100%),
          radial-gradient(circle at ${meshX}px ${meshY}px, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
          repeating-linear-gradient(${meshY}deg, transparent 0%, transparent 5%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.1) 10%),
          repeating-radial-gradient(circle at ${meshX}px ${meshY}px, transparent 0%, transparent 5%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.1) 10%)
        `,
        backgroundSize: '200% 200%, 100% 100%, 50px 50px, 100px 100px',
        backgroundPosition: 'center',
        opacity: isHovered ? 0.6 : 0.3,
        transition: 'opacity 0.3s ease',
        filter: useMotionTemplate`hue-rotate(${hueRotate}deg)`,
      }}
      animate={controls}
      className="absolute inset-0 z-50"
    >
      <HolographicOverlay isHovered={isHovered} x={meshX} y={meshY} />
    </motion.div>
  )
}

interface HolographicOverlayProps {
  isHovered: boolean
  x: MotionValue<number>
  y: MotionValue<number>
}

const HolographicOverlay: React.FC<HolographicOverlayProps> = ({
  isHovered,
  x,
  y,
}) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(218,165,32,0.3)"
            strokeWidth="0.5"
          />
        </pattern>
        <radialGradient id="sphere" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255,215,0,0.3)" />
          <stop offset="100%" stopColor="rgba(255,215,0,0)" />
        </radialGradient>
      </defs>

      <motion.rect
        width="100%"
        height="100%"
        fill="url(#grid)"
        style={{ scale: isHovered ? 1.05 : 1, transition: 'scale 0.3s ease' }}
      />

      <motion.circle
        cx="50%"
        cy="50%"
        r="30%"
        fill="url(#sphere)"
        style={{
          x: useTransform(x, [-20, 20], [-10, 10]),
          y: useTransform(y, [-20, 20], [-10, 10]),
        }}
      />
    </svg>
  )
}

const getTierColor = (tier: 'platinum' | 'gold' | 'silver' | 'bronze') => {
  switch (tier) {
    case 'platinum':
      return 'bg-[#000000]'
    case 'gold':
      return 'bg-[#816f1c]'
    case 'silver':
      return 'bg-[#7f7d7d]'
    case 'bronze':
      return 'bg-[#835120]'
  }
}

export default SponsorCard
