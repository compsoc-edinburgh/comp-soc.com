import { INSTAGRAM_URL } from '@/constants/socials'
import { motion } from 'framer-motion'
import { FC } from 'react'
import prefersReducedMotion from '@/utils/prefersReducedMotion'
import { Instagram } from 'iconoir-react'

const PARTICLES_COUNT = Array.from({ length: 20 }, (_, i) => ({
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
      x: 0,
      y: 0,
      duration: 10,
      delay: delay,
    },
    visible: {
      opacity: [0, 0.8, 0],
      x: x,
      y: y,
      transition: {
        duration: 2,
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
      className="absolute w-2 h-2 bg-csred rounded-sm"
      initial="hidden"
      variants={particleVariants}
      // animate={isHovered ? 'hover' : 'visible'}
      animate="visible" // Im sure there is a way to make the duration switch work, but it just doesn't seem to work for me + does not look good
    />
  )
}

const Particles: FC = () => {
  if (prefersReducedMotion()) return null
  return (
    <>
      {PARTICLES_COUNT.map(({ index, x, y, delay, duration }) => (
        <Particle key={index} x={x} y={y} delay={delay} duration={duration} />
      ))}
    </>
  )
}

const SocialLinks: FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Particles />
      <motion.a
        href={INSTAGRAM_URL}
        target="_blank"
        className="p-2 text-white bg-csred rounded-lg z-10 shadow-lg flex items-center gap-1"
        whileHover={{ scale: 1.05 }}
      >
        <Instagram width={48} height={48} />

        <div className="text-white text-center">
          <p>Stay up-to-date!</p>
          <p className="text-xs text-left text-gray-300">
            Follow our Instagram
          </p>
        </div>
      </motion.a>
    </div>
  )
}

export default SocialLinks
