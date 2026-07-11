import Banner from '@/app/component/career/Banner'
import JobApply from '@/app/component/career/JobApply'
import LifeFireAi from '@/app/component/career/LifeFireAi'
import WhyWork from '@/app/component/career/WhyWork'
import React from 'react'

const page = () => {
  return (
    <div>
    <Banner/>
    <LifeFireAi/>
    <WhyWork/>
    <JobApply/>
    </div>
  )
}

export default page