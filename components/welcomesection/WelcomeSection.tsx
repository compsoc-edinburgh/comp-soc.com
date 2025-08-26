import PresidentQuoteSection from './PresidentQuoteSection'
import FadeInBoxRow from './FadeInBoxRow'
import TerminalTyping from '../TerminalTyping'

const WelcomeSection = () => {
  return (
    <div id="welcome" className="flex flex-col">
      <div className="hidden mb-10 md:block">
        <TerminalTyping text="CompSoc Welcomes You.  " />
      </div>
      <div className="sm:hidden mb-10 min-h-[100px]">
        <TerminalTyping text="CompSoc <br/> Welcomes You.  " />
      </div>

      <PresidentQuoteSection />
      <div className="mt-10">
        <FadeInBoxRow />
      </div>
    </div>
  )
}

export default WelcomeSection
