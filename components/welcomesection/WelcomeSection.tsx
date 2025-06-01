import PresidentQuoteSection from './PresidentQuoteSection'
import FadeInBoxRow from './FadeInBoxRow'
import TerminalTyping from '../TerminalTyping'
import VariableBackgroundSwitcher from '../VariableBackgroundSwitcher'

const WelcomeSection = () => {
  return (
    <div id="welcome" className="flex flex-col">
      <div className="hidden mb-20 md:block">
        <TerminalTyping text="CompSoc Welcomes You.  "></TerminalTyping>
      </div>
      <div className="sm:hidden mb-10 min-h-[100px]">
        <TerminalTyping text="CompSoc <br/> Welcomes You.  "></TerminalTyping>
      </div>

      <PresidentQuoteSection />
      <div className="mt-20">
        <FadeInBoxRow></FadeInBoxRow>
      </div>
    </div>
  )
}

export default WelcomeSection
