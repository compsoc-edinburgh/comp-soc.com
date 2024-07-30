import Heading from '@/components/heading'
import FAQList from './FAQList'
import { INSTAGRAM_URL } from '@/constants/socials'

const FAQSection = () => {
  return (
    <div className="mt-20">
      <Heading title="FAQ's"></Heading>
      <div className="mt-8">
        <FAQList />
        <div className="mt-4 text-center opacity-70 hover:opacity-100">
          Any other question? Ask away to our DMs on{' '}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="underline underline-offset-4"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
