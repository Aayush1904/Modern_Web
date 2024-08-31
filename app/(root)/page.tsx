import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Process } from '@/components/Process'
import Tag3d from '@/components/ui/3dtag'
import Bentodemo from '@/components/ui/bentogrid'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { MacbookScroll } from '@/components/ui/MacbookScroll'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaInfo, FaRupeeSign } from 'react-icons/fa6'

const Home = () => {
  return (
    <>
      <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
        <div className='max-w-7xl w-full'>
          <FloatingNav className='text-green-300' navItems={[
            { name: 'Home', link: '/', icon: <FaHome /> },
            { name: 'About', link: '/about', icon: <FaInfo /> },
            { name: 'PriceModel', link: '/pricemodal', icon: <FaRupeeSign /> },
          ]} />
          <Hero />
          <Bentodemo />
          <MacbookScroll src="/img-2.webp" showGradient={true} />
          <Process />
          <Clients />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home