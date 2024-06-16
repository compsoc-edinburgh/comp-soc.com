import PRESIDENT_QUOTE from '@/constants/presidentsQuote'
import { TEAM } from '@/constants/team'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import VariableBackgroundSwitcher from '../VariableBackgroundSwitcher'

const PresidentQuoteSection = () => {
  const latestYear = Object.keys(TEAM).sort().reverse()[0]
  const president = TEAM[latestYear].find(
    (person) => person.role === 'President'
  )
  if (!president) return null
  return (
    <>
      <VariableBackgroundSwitcher activeColor="bg-[#000000]">
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 lg:gap-16">
            <div className="sm:col-span-1 flex flex-col sm:items-end items-start justify-center">
              <div className="flex flex-col items-left">
                <Image
                  src={
                    `${prefix}/team/${president.image}` || '/images/hero.jpg'
                  }
                  alt={`Headshot of CompSoc's president, ${president.name}`}
                  width={200}
                  height={200}
                  className="rounded-full object-cover md:w-48 md:h-48 w-24 h-24"
                />
                <p className="text-xs text-primary opacity-50">
                  {president.role}
                </p>
                <h1 className="text-left">
                  {president.name}{' '}
                  <span className="opacity-50"> {president.surname}</span>
                </h1>
              </div>
            </div>
            <div className="sm:col-span-3 font-space-mono">
              <h2 className="text-4xl -translate-x-6 translate-y-2">“</h2>
              <p>{PRESIDENT_QUOTE}</p>
              <h2 className="text-4xl text-right">”</h2>
            </div>
          </div>
        </div>
      </VariableBackgroundSwitcher>
    </>
  )
}

export default PresidentQuoteSection
