import PRESIDENT_QUOTE from '@constants/presidentQuote'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import VariableBackgroundSwitcher from '../VariableBackgroundSwitcher'
import { LATEST_YEAR, Role, TEAM } from '@/lib/committee'

const PresidentQuoteSection = () => {
  const president = TEAM[LATEST_YEAR].find(
    (person) => person.role === Role.PRESIDENT
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
            <div className="sm:col-span-3">
              <h2 className="text-4xl md:-translate-x-6 -translate-x-2 translate-y-2">
                {'"'}
              </h2>

              <p className="text-justify">{PRESIDENT_QUOTE}</p>

              <h2 className="text-4xl text-right md:translate-x-6 translate-x-2 -translate-y-4">
                {'"'}
              </h2>
            </div>
          </div>
        </div>
      </VariableBackgroundSwitcher>
    </>
  )
}

export default PresidentQuoteSection
