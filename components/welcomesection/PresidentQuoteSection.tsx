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
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 justify-center items-center">
              <div className="md:col-span-1 flex flex-col items-center md:items-start">
                <div className="relative group">
                  <div className="relative border-cslightgrey p-2 hover:border-csred transition-colors duration-300">
                    <Image
                      src={
                        `${prefix}/team/${president.image}` ||
                        '/images/hero.jpg'
                      }
                      alt={`Headshot of CompSoc's president, ${president.name}`}
                      width={160}
                      height={160}
                      className="object-cover w-32 h-32 md:w-40 md:h-40"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center md:text-left">
                  <div className="font-space-mono text-xs text-csred uppercase tracking-wider">
                    {president.role}
                  </div>
                  <h3 className="font-tomorrow text-lg text-textPrimary">
                    {president.name}
                  </h3>
                  <p className="font-tomorrow text-lg text-textSecondary">
                    {president.surname}
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col justify-center">
                <div className="relative">
                  <div className="font-tomorrow text-4xl md:text-5xl text-csred opacity-60 leading-none mb-2">
                    &ldquo;
                  </div>

                  <div className="relative">
                    <p className="font-space-mono text-sm text-textPrimary leading-relaxed">
                      {PRESIDENT_QUOTE}
                    </p>
                  </div>

                  <div className="font-tomorrow text-4xl md:text-5xl text-csred opacity-60 leading-none text-right mt-2">
                    &rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VariableBackgroundSwitcher>
    </>
  )
}

export default PresidentQuoteSection
