import React from 'react'

const FactCard: React.FC<{ text: string; number: string }> = ({
  text,
  number,
}) => {
  return (
    <div className="rounded-lg">
      <h2 className="text-xl">
        {number} {text}
      </h2>
      {/* <p className="text-xl ">{text}</p> */}
    </div>
  )
}

export default FactCard
