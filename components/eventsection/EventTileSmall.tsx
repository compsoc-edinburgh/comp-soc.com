import styled from "styled-components";
import { Event } from "@/app/types";
import { useState, useRef, useEffect } from "react";
import TruncateText from "../truncatetext/truncatetext";

const EventTileSmall = ({
  title,
  description,
  eventURL,
  location,
  date,
  upcoming,
}: Event) => {
  
  const nonDescriptionRef = useRef<HTMLDivElement>(null);
  const [nonDescriptionHeight, setNonDescriptionHeight] = useState(0);

  const [isClicked, setIsClicked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 1023px)').matches);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked);
      setShowDescription(!showDescription);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowDescription(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowDescription(false);
    }
  };


  return (

    <div
    className={`${
      isClicked ? 'bg-csred' : 'bg-csgrey'
    } font-space-mono border-t-2 border-r-2 border-white pt-6 pl-8 pr-8 w-full h-full flex flex-col transition duration-500 ease-in-out lg:hover:bg-csred`}
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
  {showDescription ? (
    <p
      className="text-white flex pl-2 pr-2"
      style={{ height: `${nonDescriptionHeight}px` }}
    >
      {description}
    </p>
  ) : (
    <div ref={nonDescriptionRef}>
      <h1 className="text-csred mb-2">{upcoming ? 'Upcoming event' : 'Past event'}</h1>

      <div className="flex flex-col justify-between" style={{ minHeight: "200px" }}>
  <div>
    <h1 className="text-2xl w-3/4">{title.toUpperCase()}</h1>
  </div>
  <div className="mt-auto">
    <p className="mb-2 pt-4" style={{ maxWidth: "150px" }}>
      {date} <br /> {location}
    </p>
  </div>
</div>

    </div>
  )}
</div>
  );
};

export default EventTileSmall;
