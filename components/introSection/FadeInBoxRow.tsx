import React, { useRef } from 'react'
import FadeInBox from './FadeInBox'

const FadeInBoxRow: React.FC = () => {
  const boxes = [
    { number: '25', text: 'years' },
    { number: '1500', text: 'members', affix: '+' },
    { number: '50', text: 'yearly events', affix: '+' },
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
