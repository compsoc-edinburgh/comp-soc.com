import React, { useState, useRef } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mb-4 w-full font-space-mono">
      <button
        className="w-full p-4 text-left bg-csred text-white font-space-mono-bold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-2xl">
          {isOpen ? <MdExpandLess /> : <MdExpandMore />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
        }}
      >
        <div
          ref={contentRef}
          className="p-4 bg-cslightgrey text-white border-neutral-600 border-l-4"
        >
          {answer}
        </div>
      </div>
    </div>
  )
}
export default FAQItem
