import React, { useEffect, useRef } from 'react'

interface TerminalTypingProps {
  text: string
}

const TerminalTyping: React.FC<TerminalTypingProps> = ({ text }) => {
  const elementRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    let observer: IntersectionObserver
    let i = 0
    let isTag = false
    let displayedText = ''

    function type() {
      displayedText = text.slice(0, ++i)
      if (displayedText === text) return
      if (element) {
        element.innerHTML = displayedText + `<span class='blinker'>&#32;</span>`
      }
      const char = displayedText.slice(-1)
      if (char === '<') isTag = true
      if (char === '>') isTag = false
      if (isTag) return type()
      setTimeout(type, 60)
    }

    if (element) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            type()
            observer.disconnect() // Stop observing once the typing starts
          }
        },
        { threshold: 0.1 } // Adjust this threshold as needed
      )

      observer.observe(element)
    }

    return () => {
      if (observer && element) {
        observer.unobserve(element)
      }
    }
  }, [text])

  return (
    <>
      <span
        ref={elementRef}
        id="AboutDevTypeText"
        className="typeing text-white text-4xl font-space-mono"
      ></span>

      <style>
        {`
          .blinker {
            opacity: 1;
            margin-bottom: -2px;
            height: 15px;
            margin-left: -5px;
            border-left: 7px solid red;
            animation: blinker 0.9s steps(2, start) infinite;
          }

          @keyframes blinker {
            to { 
              visibility: hidden; 
            }
          }
        `}
      </style>
    </>
  )
}

export default TerminalTyping
