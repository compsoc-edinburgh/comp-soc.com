import React, { useRef } from 'react'
import FadeInBox from './FadeInBox'
import 'tailwindcss/tailwind.css'

const FadeInBoxRow: React.FC = () => {
  const boxes = [
    { number: '12', text: 'years' },
    { number: '1500', text: 'members', affix: '+' },
    { number: '200', text: 'events' },
    { number: '10', text: 'SIGs' },
  ]
  const delay = 0.2 // Set the delay timing here
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="flex justify-center flex-wrap md:flex-nowrap">
      {boxes.map((box, index) => {
        return (
          <FadeInBox key={index} delay={delay * index} content={box}>
            {/* <div className="text-center font-space-mono">
              <div>
                <div ref={ref} className="text-4xl">
                  {count}
                  {box.affix && <span>{box.affix}</span>}
                </div>
                <div className="text-sm">{box.text}</div>
              </div>
            </div> */}
          </FadeInBox>
        )
      })}
    </div>
  )
}

export default FadeInBoxRow
