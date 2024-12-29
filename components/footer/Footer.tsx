'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import React from 'react'
import FooterCanvas from './FooterCanvas'

const text = [
  <>CompSoc ❤️ You!</>,
  <>
    Illustrations by{' '}
    <a
      href="https://robertaposiunaite.com/"
      target="_blank"
      rel="noreferrer"
      className="underline"
    >
      Roberta Posiunaite
    </a>
  </>,
  <>
    Code by{' '}
    <a
      href="https://caterina.codes"
      target="_blank"
      rel="noreferrer"
      className="underline"
    >
      Caterina Mammola
    </a>
    {' and '}
    <a
      href="https://tomasmaillo.com/"
      target="_blank"
      rel="noreferrer"
      className="underline"
    >
      Tomas Maillo
    </a>
  </>,
]

const CreditsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % text.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center overflow-hidden py-2 perspective-[100000px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10, rotateX: 40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -10, rotateX: -40 }}
          transition={{
            duration: 0.3,
            rotateX: { type: 'spring', stiffness: 50 },
          }}
          className="text-white text-center"
        >
          {text[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="relative w-full bg-csred">
      <CreditsCarousel />
      <FooterCanvas />
    </div>
  )
}

export default Footer
