import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Tag3d from './ui/3dtag'

const Hero = () => {
    return (
        <>
            <div className='pb-20 pt-36'>
                <div>
                    <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#90EE90' />
                    <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#90EE90' />
                    <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='white' />
                </div>


                {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-green-300/[0.09] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div> */}

                <div className='flex justify-center relative my-20 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-green-300 max-w-80'>Accuracy comes with Machine learning.</h2>
                        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Predicting the future prices of the crops which help grow Farmers" />

                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            Hi guys! do check out our prediction model and checkout the future prices!
                        </p>

                        <a href="/pricemodal">
                            <MagicButton title="Check it out" icon={<FaLocationArrow />} position='right' />
                        </a>
                    </div>
                </div>
            </div >
            <Tag3d />
        </>
    )
}

export default Hero

