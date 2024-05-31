import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SIGs } from '@/constants/SIGs'
import { SIG } from '@/types/SIG'
import SIGCard from './SIGCard'
import SIGSwipeView from './SIGSwipeView'

const SIGSpreadView = () => {
  // Constants could be changed for different vibes and looks
  const cardWidth = 230 
  const cardHeight = 300
  const margin = 32
  const positionRandomness = 32
  const ref = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(0)
  const [divDimensions, setDivDimensions] = useState({ width: 0, height: 0 })
  const [SIGsAndPositions, setSIGsAndPositions] = useState<
    { x: number; y: number; rotate: number; SIG: SIG }[]
  >([])
  const [inView, setInView] = useState(false)

  const calculatePositions = () => {
    // Calculate the positions of the SIG cards. Messy but it works.
    setSIGsAndPositions(() => {
      const numRows = Math.ceil(SIGs.length / columns)
      const lastRowItemCount = SIGs.length % columns || columns
      const lastRowOffset =
        ((columns - lastRowItemCount) * (cardWidth + margin)) / 2

      return SIGs.map((SIG, i) => {
        const currentRow = Math.floor(i / columns)
        const isLastRow = currentRow === numRows - 1
        const x =
          (i % columns) * (cardWidth + margin) +
          Math.random() * positionRandomness -
          positionRandomness / 2 +
          (isLastRow ? lastRowOffset : 0) + (divDimensions.width - columns * (cardWidth + margin)) / 2
        const y =
          Math.floor(i / columns) * (cardHeight + margin) +
          Math.random() * positionRandomness -
          positionRandomness / 2
        const rotate = columns == 1 ? 0 : Math.random() * 8 - 4

        return { x, y, rotate, SIG }
      })
    })
  }

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return
      setColumns(
        Math.floor(ref.current.clientWidth / (cardWidth + margin)) || 1
      )
      setDivDimensions({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), 1000) // Delay the animation
          observer.disconnect()
        }
      },
      {
        root: null, // viewport as root
        threshold: 0.01,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (columns > 0) {
      calculatePositions()
    }
  }, [columns, SIGs])

  return (
    <div
      className="relative w-full my-12"
      ref={ref}
      style={{
        height: Math.ceil(SIGs.length / columns) * (cardHeight + margin),
      }}>
      {SIGsAndPositions.map((sig, i) => (
        <motion.div
          key={sig.SIG.name}
          initial={{
            x: divDimensions.width / 3 + 24 * i,
            y: divDimensions.height / 3,
          }}
          animate={{
            x: inView ? sig.x : divDimensions.width / 3 + 24 * i,
            y: inView ? sig.y : divDimensions.height / 3,
            rotate: sig.rotate,
          }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="absolute hover:z-50">
          <SIGCard sig={sig.SIG} />
        </motion.div>
      ))}
    </div>
  )
}

export default SIGSpreadView
