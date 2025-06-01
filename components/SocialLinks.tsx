import { DISCORD_INVITE_URL } from '@/constants/socials'
import { motion } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'
import prefersReducedMotion from '@/utils/prefersReducedMotion'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'

const PARTICLES_COUNT = Array.from({ length: 15 }, (_, i) => ({
  index: i,
  x: Math.random() * 500 - 250,
  y: Math.random() * 300 - 150,
  delay: Math.random() * 2,
  duration: 2 + Math.random() * 2,
}))

const Particle: FC<{
  x: number
  y: number
  delay: number
  duration: number
}> = ({ x, y, delay, duration }) => {
  const particleVariants = {
    hidden: {
      opacity: 0,
      x: x,
      y: y,
      duration: 10,
      delay: delay,
    },
    visible: {
      opacity: [0, 0.8, 0],
      x: 0,
      y: 0,
      transition: {
        duration: 1.5,
        delay: Math.random() * 2,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
    hover: {
      opacity: [0, 1, 0],
      x: 1,
      y: 1,
      transition: {
        duration: duration,
        delay: Math.random() * 2,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  }

  return (
    <motion.div
      className="absolute w-2 h-2 bg-discordPurple rounded-sm"
      initial="hidden"
      variants={particleVariants}
      // animate={isHovered ? 'hover' : 'visible'}
      animate="visible" // Im sure there is a way to make the duration switch work, but it just doesn't seem to work for me + does not look good
    />
  )
}

const Particles: FC = () => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div className="absolute" ref={ref}>
      {isInView &&
        PARTICLES_COUNT.map(({ index, x, y, delay, duration }) => (
          <Particle key={index} x={x} y={y} delay={delay} duration={duration} />
        ))}
    </div>
  )
}

// TODO: If we ever run this website on server, we should cache this value!
const MemberCount: FC = () => {
  const [memberCount, setMemberCount] = useState<number | null>(null)
  const [onlineCount, setOnlineCount] = useState<number | null>(null)

  // return number with K, M, B, T, etc.
  const formatMemberCount = (count: number) => {
    if (count < 1000) return count
    const exp = Math.floor(Math.log(count) / Math.log(1000))
    return (count / Math.pow(1000, exp)).toFixed(1) + 'kMGTPEZY'[exp - 1]
  }

  useEffect(() => {
    const fetchMemberCount = async () => {
      const INVITE_CODE = DISCORD_INVITE_URL.split('/').pop()
      try {
        const response = await fetch(
          `https://discord.com/api/v9/invites/${INVITE_CODE}?with_counts=true&with_expiration=true`
        )
        const data = await response.json()
        setMemberCount(data.approximate_member_count)
        setOnlineCount(data.approximate_presence_count)
      } catch (error) {
        console.error('Error fetching member count:', error)
      }
    }

    fetchMemberCount()
  }, [])

  return (
    <div
      className="text-white text-center -translate-y-[2px]"
      title={`There are ${onlineCount} members online`}
    >
      <p>Join our Discord!</p>

      <p className="text-xs text-left text-slate-300">
        {memberCount !== null
          ? `${formatMemberCount(memberCount)} members online`
          : 'CompSoc Loves You!'}
      </p>
    </div>
  )
}

const SocialLinks: FC = () => {
  return (
    <div className="relative flex items-center justify-center gap-6">
      <Particles />

      <Particles />
      <motion.a
        href={DISCORD_INVITE_URL}
        target="_blank"
        className="px-3 py-1 text-white bg-discordPurple rounded-lg z-10 shadow-lg flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
      >
        {/* 
          I would use this icon... but its the ugliest thing I've ever seen
          <Discord width={48} height={48} /> 
          So lets use a random svg
        */}
        <Image
          className="translate-y-[2px]"
          src={`${prefix}/discord.svg`}
          alt="Discord logo"
          width={48}
          height={40}
        />

        <MemberCount />
      </motion.a>
    </div>
  )
}

export default SocialLinks
