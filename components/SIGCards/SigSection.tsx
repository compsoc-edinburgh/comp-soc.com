import Heading from '@/components/heading'
import SIGCards from './SIGCards'

const SigSection = () => {
  return (
    <div id="sigs" className="mt-40">
      <Heading title="Meet our SIGs" />
      <div className="w-full lg:w-4/5 mt-6 font-space-mono">
        <p>
          Within CompSoc we have several mini-societies known as Special
          Interest Groups, each focusing on different areas of Computer Science.
        </p>
      </div>
      <SIGCards />
    </div>
  )
}

export default SigSection
