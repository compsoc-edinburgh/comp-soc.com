"use client";

import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import EventSection from './eventgrid/EventSection';
import FAQSection from './faqlist/FAQSection';
import PartnerSection from './partnersection/PartnerSection';
 

export default function Home() {


  return (
    <main className="bg-background flex items-center justify-center min-h-screen flex-col p-24">
    <div className='w-full'>
        <div className='flex flex-col justify-between items-center'>
            <Image
                src={`${prefix}/compsoc-long.png`}
                alt="Wide CompSoc logo"
                width={512}
                height={126}
                className="filter drop-shadow-white"
                style={{
                    filter:
                        'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1)) drop-shadow(0px 0px 197.8px rgba(255, 255, 255, 0.1))',
                }}
            />
        </div>
        
        <EventSection></EventSection>

        <FAQSection></FAQSection>

        <PartnerSection></PartnerSection>
        
    </div>
</main>
  )
}
