import PresidentQuoteSection from './PresidentQuoteSection'
import FadeInBoxRow from './FadeInBoxRow'
import TerminalTyping from '../TerminalTyping'
import VariableBackgroundSwitcher from '../VariableBackgroundSwitcher'

const WelcomeSection = () => {
  return (
    <div className="flex flex-col">
      <div className=" mb-20">
        <TerminalTyping text="CompSoc Welcomes You.  "></TerminalTyping>
      </div>

      <PresidentQuoteSection />
      <div className="mt-20">
        <FadeInBoxRow></FadeInBoxRow>
      </div>
    </div>
  )
}

export default WelcomeSection
