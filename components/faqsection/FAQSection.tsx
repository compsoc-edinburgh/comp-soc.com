import Heading from '@/components/heading'
import FAQList from './FAQList'
import { INSTAGRAM_URL } from '@/constants/socials'

const FAQSection = () => {
  return (
    <div id="faqs" className="mt-20">
      <Heading title="FAQ's" />
      <div className="mt-8">
        <FAQList />
        <div className="mt-4 text-center text-white/70">
          Any other question? Ask away to our DMs on{' '}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="underline underline-offset-4 hover:text-csred transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
