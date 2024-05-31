import { motion } from 'framer-motion'
import { useState } from 'react'
import SIGCard from './SIGCard' // Assume SIGCard is a component you have
import { SIGs } from '@/constants/SIGs'

const SIGSwipeView = () => {
  const [index, setIndex] = useState(0)
  const [swipedDirections, setSwipedDirections] = useState(
    Array(SIGs.length).fill(null)
  )

  const handleSwipe = (direction: 'left' | 'right', i: number) => {
    if (i < SIGs.length) {
      setSwipedDirections((prev) => {
        const newDirections = [...prev]
        newDirections[i] = direction
        return newDirections
      })
      setIndex(i + 1)
    }
  }

  const resetStack = () => {
    setIndex(0)
    setSwipedDirections(Array(SIGs.length).fill(null))
  }

  return (
    <div className="relative w-full my-12 h-96">
      <div className="absolute w-full h-full flex justify-center items-center">
        {SIGs.map((sig, i) => (
          <motion.div
            key={i}
            className={`absolute`}
            initial={{
              x: 0,
              y: -5 * i,
              scale: 1 - i * 0.01,
            }}
            animate={{
              x:
                swipedDirections[i] === 'left'
                  ? -1000
                  : swipedDirections[i] === 'right'
                  ? 1000
                  : 0,
              y: -5 * i,
              scale: 1 - i * 0.01,
              rotate: swipedDirections[i] ? Math.random() * 50 - 25 : 0,
            }}
            exit={{
              x: swipedDirections[i] === 'left' ? -1000 : 1000,
              rotate: 360,
            }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x
              if (swipe > 800) {
                handleSwipe('right', i)
              } else if (swipe < -800) {
                handleSwipe('left', i)
              }
            }}
            style={{ zIndex: SIGs.length - i }}>
            <SIGCard sig={sig} />
          </motion.div>
        ))}
      </div>
      {index === SIGs.length && (
        <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-blue-500 text-white rounded"
          onClick={resetStack}>
          Reset Stack
        </button>
      )}
    </div>
  )
}

export default SIGSwipeView
