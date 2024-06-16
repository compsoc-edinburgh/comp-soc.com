import PresidentQuoteSection from './PresidentQuoteSection'
import FadeInBoxRow from './FadeInBoxRow'
import TerminalTyping from '../TerminalTyping'
import VariableBackgroundSwitcher from '../VariableBackgroundSwitcher'

const IntroSection = () => {
  return (
    <VariableBackgroundSwitcher activeColor="bg-[#471819]">
      <div className="flex flex-col mt-40">
        <div className=" mb-20">
          <TerminalTyping text="CompSoc Welcomes You.  "></TerminalTyping>
        </div>

        <PresidentQuoteSection />
        <div className="mt-20">
          <FadeInBoxRow></FadeInBoxRow>
        </div>
      </div>
    </VariableBackgroundSwitcher>
  )
}

export default IntroSection
