import React from 'react'

import TrendingDestination from './trending-destination'
import HeroSection from './hero-section'
import SearchIng from '@/features/search'


function Home() {
  return (
    <>
      <HeroSection />
   <div className='-mt-8 relative z-[2]'>
    <SearchIng />
   </div>
      <TrendingDestination />
    </>
  )
}

export default Home