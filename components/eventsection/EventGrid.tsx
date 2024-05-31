import { Event } from "@/app/types";
import { FC } from "react";
import EventTileBig from "./EventTileBig";
import EventTileSmall from "./EventTileSmall";
import { prefix } from "@/utils/prefix";
import Image from "next/image";

interface EventListProps {
  events: Event[];
}

const EventGrid: FC<EventListProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-10 grid-rows-6 gap-0 border-b-2 border-white" >
      <div className="col-span-3 row-span-2 col-start-8 row-start-1"  >
        <EventTileSmall {...events[0]} />
      </div>
      <div className="col-span-3 row-span-2 col-start-8 row-start-3">
        <EventTileSmall {...events[1]} />
      </div>
      <div className="col-span-3 row-span-2 col-start-8 row-start-5">
        <EventTileSmall {...events[2]} />
      </div>
      <div className="col-span-7 row-span-2 col-start-1 row-start-1">
        <EventTileBig {...events[3]} />
      </div>
      <div className="col-span-7 row-span-4 col-start-1 row-start-3">
        {/* <img className="w-full h-full object-cover border-white border-2" src=""></img> */}

        <Image
          width={100}
          height={100}
          src={`${prefix}/infball.webp`}
          alt="Wide CompSoc logo"
          className="w-full h-full object-cover border-white border-2 border-b-0"
        />
      </div>
    </div>
  );
};

export default EventGrid;
