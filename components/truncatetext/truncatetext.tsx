import React, { useRef, useEffect, useState } from 'react';

interface TruncateTextProps {
  text: string;
  maxHeight: number; // Maximum height in pixels
}

const TruncateText: React.FC<TruncateTextProps> = ({ text, maxHeight }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (element && element.scrollHeight > maxHeight) {
      setIsTruncated(true);
    }
  }, [text, maxHeight]);

  return (
    <div
      ref={textRef}
      style={{
        maxHeight: `${maxHeight}px`,
        overflow: 'hidden',
        position: 'relative',
        whiteSpace: 'pre-line', // This will preserve the line breaks
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: isTruncated ? 3 : 'none', // Adjust this based on your needs
      }}
    >
      {text}
      {isTruncated && <span style={{ position: 'absolute', right: 0, bottom: 0}}></span>}
    </div>
  );
};

export default TruncateText;
