import React from "react";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-red-500 mr-4"></div>
      <h1 className="font-tomorrow text-3xl text-left">{title}</h1>
    </div>
  );
};

export default Heading;
