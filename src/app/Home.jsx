import React from 'react'
import Banner from './component/home/Banner'
import WhoWeAre from './component/home/WhoWeAre'
import FAQ from './component/home/FAQ'
import TechnologyStack from './component/home/TechnologyStack'
import VoiceofPartners from './component/home/VoiceofPartners'
import WhatWeDo from './component/home/WhatWeDo'

const Home = () => {
  return (
    <div className=''>

      <Banner/>
      <TechnologyStack/>
      <WhoWeAre/>
      <WhatWeDo/>
      <FAQ/>
      <VoiceofPartners/>
    </div>
  )
}

export default Home