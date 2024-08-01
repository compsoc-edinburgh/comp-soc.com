'use client'

import BigLink from '@/components/BigLink'
import Heading from '@/components/heading'
import { PageEdit } from 'iconoir-react'

export default function Families() {
  return (
    <div className="lg:w-4/5 mx-auto pt-12">
      <Heading title="CompSoc Academic Families!" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-1 order-first lg:order-last">
          <BigLink
            href="https://docs.google.com/forms/d/1g38DKV3R0dJSIitrboPTqHBV8aI2SPHy6F2R8TYcGes"
            icon={<PageEdit width={32} height={32} />}
            title="Parent Sign Up Form"
            description="Sign up before 20th Aug"
          />
        </div>

        <div className="lg:col-span-2 lg:order-first order-last space-y-4">
          <p>
            We&apos;ve been working hard to make plans for the upcoming year
            that accommodate all of you, and part of this plan is to introduce
            Academic Families (AcFams)!
          </p>

          <p>
            Academic families is a new joint initiative between Compsoc and the
            School of Informatics. It will start in the 2024-25 academic year,
            and we aim to bring together students from all years within the
            School.
          </p>

          <p>
            Students in older years will &apos;adopt&apos; freshers, and
            it&apos;s a great way of helping the community, meeting new people,
            and having a good time together! Each family will consist of 10
            first-year Informatics students and 2 academic parents from the
            years above (UG2 - UG5). Students will have the opportunity to
            organise family events, as well as take part in larger events
            organised by the School of Informatics!
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Why be an academic parent?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Participate in exclusive social academic family events funded by
              the School of Informatics!
            </li>
            <li>
              Have 1-on-1 conversations with staff and lecturers about student
              experience at the School of Informatics
            </li>
            <li>
              Be a voice in shaping the student experience in the School of
              Informatics
            </li>
            <li>
              Mentor and bond with first year students in their academic and
              social endeavours
            </li>
            <li>Form friendships with fellow academic parents</li>
          </ul>

          <p className="mt-6">
            Spaces are limited, so if this is something that interests you, sign
            up! Anyone in CompSoc is welcome to join, and you can even propose
            to your AcFam spouse-to-be!
          </p>

          <p className="mt-6">
            Have any questions? Reach out to us via{' '}
            <a href="mailto:families@comp-soc.com" className="underline">
              families@comp-soc.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
