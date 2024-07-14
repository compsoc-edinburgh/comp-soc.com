import React from 'react'

const FactCard: React.FC<{ text: string; number: string }> = ({
  text,
  number,
}) => {
  return (
    <div
      className="p-4 text-center rounded-lg"
      style={{ backgroundColor: '#484848', border: '1px solid #7F7F7F' }}
    >
      <h2 className="text-3xl font-space-mono">{number}</h2>
      <p className="text-xl">{text}</p>
    </div>
  )
}

export default FactCard
