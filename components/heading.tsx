import React from 'react'

interface HeadingProps {
  title: string | React.ReactNode
  customIcon?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ title, customIcon }) => {
  return (
    <div className="flex items-center gap-4">
      {customIcon ? customIcon : <div className="w-8 h-8 bg-red-500"></div>}
      <h1 className="font-tomorrow text-3xl text-left">{title}</h1>
    </div>
  )
}

export default Heading
