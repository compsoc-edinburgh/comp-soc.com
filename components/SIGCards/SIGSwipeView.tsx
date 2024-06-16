import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SIGCard from './SIGCard' // Assume SIGCard is a component you have
import { SIGs } from '@/constants/SIGs'
import { Refresh } from 'iconoir-react'
import { SIG } from '@/types/SIG'

const SIGSwipeView = () => {
  const [index, setIndex] = useState(0)
  const [swipedDirections, setSwipedDirections] = useState(
    Array(SIGs.length).fill(null)
  )

  // Shuffling needs to be done on the client side due to rehydration issues with static gen
  const [shuffledSIGs, setShuffledSIGs] = useState<SIG[]>([])
  useEffect(() => {
    setShuffledSIGs(SIGs.sort(() => Math.random() - 0.5))
  }, [])

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
        {shuffledSIGs.map((sig, i) => (
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
            style={{ zIndex: SIGs.length - i }}
          >
            <SIGCard sig={sig} />
          </motion.div>
        ))}
        <AnimatePresence>
          {index === SIGs.length && (
            <motion.div
              className="m-6 p-4 rounded-sm shadow-md flex flex-col items-center space-y-4 bg-foreground z-10 font-space-mono"
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-tomorrow text-xl">Found your match?</h1>
              <p>Join any of those SIG&apos;s events and try it out!</p>
              <p>If not, consider creating your own SIG</p>
              <button
                className="p-4 rounded-lg shadow-md flex items-center space-x-2 gap-2 bg-csgrey text-white"
                onClick={resetStack}
              >
                <Refresh />
                Reset Stack
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SIGSwipeView
