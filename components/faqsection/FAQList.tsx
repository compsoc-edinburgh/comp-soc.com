// src/FAQ.tsx
import FAQItem from './FAQItem'
import { faqs } from '@/constants/faqs'
const FAQList: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default FAQList
