import React from 'react'
import FadeInBox from './FadeInBox'

const FadeInBoxRow: React.FC = () => {
  const boxes = [
    { number: '25', text: 'Years' },
    { number: '1.5K', text: 'Members', affix: '+' },
    { number: '50', text: 'Events', affix: '+' },
    { number: '10', text: 'SIGs' },
  ]
  const delay = 0.2

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6 w-full">
      {boxes.map((box, index) => (
        <FadeInBox key={index} delay={delay * index} content={box} />
      ))}
    </div>
  )
}

export default FadeInBoxRow
