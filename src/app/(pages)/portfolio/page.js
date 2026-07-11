import Banner from '@/app/component/portfolio.jsx/Banner'
import Projects from '@/app/component/portfolio.jsx/Projects'
import React from 'react'

const page = () => {
  return (
    <div className='pb-4'>
      <Banner/>
      <Projects/>
    </div>
  )
}

export default page