import { socialMedia } from '@/components/data'
import { CardContainer } from '@/components/ui/3d-card'
import { LampDemo } from '@/components/ui/lamp'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'

const AboutUs = () => {
    return (
        <>
            <LampDemo />
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
                <TracingBeam className="w-full max-w-4xl py-12">
                    <CardContainer className='border-4 border-black-300 p-4 rounded-2xl shadow-lg'>
                        <div className="space-y-8">
                            {/* Header Section */}
                            <div className="text-3xl text-green-300 items-center justify-center flex">Aayush Agrawal</div>
                            <h1 className="text-2xl font-bold flex items-center justify-center">MERN Stack Developer</h1>

                            {/* Image Section */}
                            <div className="flex items-center justify-center bg-black text-white">
                                <img
                                    src="/ProfAayush.JPG"
                                    alt="Aayush"
                                    className="h-[50vh] rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 leading-relaxed text-gray-300">
                                <p>
                                    I am a dedicated Full Stack Web Developer with a passion for creating dynamic, responsive applications, and I have been doing this for one year.

                                    I have also used many UI tools like Aceternity UI, Shadcn UI, Sentry for bug reporting, Stripe for payment transactions, and Clerk for authentication.


                                </p>
                                <p>
                                    Currently, I am expanding my expertise in Python for machine learning, utilizing powerful libraries like Pandas, NumPy, and Matplotlib. Additionally, I am enhancing my skills in Java and Data Structures & Algorithms to further bolster my technical proficiency and problem-solving capabilities.
                                </p>
                                <p>
                                    I am also currently working on an in-house project for PICT, which is for the canteen, under the guidance of Vaishali Kandekar ma'am.

                                    Aspiring for a challenging carrer in Software Development as to use my learned skills and experience
                                    for best results .
                                </p>
                            </div>
                            <div className='flex items-center md:gap-3 gap-6'>
                                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                    <a href="https://arc.net/l/quote/uwtahukh" className="flex items-center justify-center w-full h-full">
                                        <img src="/link.svg" alt="Link" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer className='border-4 border-black-300 p-4 rounded-2xl shadow-lg'>
                        <div className="space-y-8">
                            {/* Header Section */}
                            <div className="text-3xl text-green-300 items-center justify-center flex">Pranav Kodlinge</div>
                            <h1 className="text-2xl font-bold flex items-center justify-center">Machine Learning</h1>

                            {/* Image Section */}
                            <div className="flex items-center justify-center bg-black text-white">
                                <img
                                    src="/pranav.jpeg"
                                    alt="Pranav"
                                    className="h-[50vh] rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 leading-relaxed text-gray-300">
                                <p>
                                    I am a dedicated Full Stack Web Developer with a passion for creating dynamic, responsive applications, and I have been doing this for one year.

                                    I have also used many UI tools like Aceternity UI, Shadcn UI, Sentry for bug reporting, Stripe for payment transactions, and Clerk for authentication.


                                </p>
                                <p>
                                    Currently, I am expanding my expertise in Python for machine learning, utilizing powerful libraries like Pandas, NumPy, and Matplotlib. Additionally, I am enhancing my skills in Java and Data Structures & Algorithms to further bolster my technical proficiency and problem-solving capabilities.
                                </p>
                                <p>
                                    I am also currently working on an in-house project for PICT, which is for the canteen, under the guidance of Vaishali Kandekar ma'am.

                                    Aspiring for a challenging carrer in Software Development as to use my learned skills and experience
                                    for best results .
                                </p>
                            </div>
                            <div className='flex items-center md:gap-3 gap-6'>
                                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                    <a href="https://arc.net/l/quote/uwtahukh" className="flex items-center justify-center w-full h-full">
                                        <img src="/link.svg" alt="Link" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer className='border-4 border-black-300 p-4 rounded-2xl shadow-lg'>
                        <div className="space-y-8">
                            {/* Header Section */}
                            <div className="text-3xl text-green-300 items-center justify-center flex">Arihant Bardia</div>
                            <h1 className="text-2xl font-bold flex items-center justify-center">Machine Learning</h1>

                            {/* Image Section */}
                            <div className="flex items-center justify-center bg-black text-white">
                                <img
                                    src="/Arihant.jpeg"
                                    alt="Arihant"
                                    className="h-[50vh] rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 leading-relaxed text-gray-300">
                                <p>
                                    I am a dedicated Full Stack Web Developer with a passion for creating dynamic, responsive applications, and I have been doing this for one year.

                                    I have also used many UI tools like Aceternity UI, Shadcn UI, Sentry for bug reporting, Stripe for payment transactions, and Clerk for authentication.


                                </p>
                                <p>
                                    Currently, I am expanding my expertise in Python for machine learning, utilizing powerful libraries like Pandas, NumPy, and Matplotlib. Additionally, I am enhancing my skills in Java and Data Structures & Algorithms to further bolster my technical proficiency and problem-solving capabilities.
                                </p>
                                <p>
                                    I am also currently working on an in-house project for PICT, which is for the canteen, under the guidance of Vaishali Kandekar ma'am.

                                    Aspiring for a challenging carrer in Software Development as to use my learned skills and experience
                                    for best results .
                                </p>
                            </div>
                            <div className='flex items-center md:gap-3 gap-6'>
                                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                    <a href="https://arc.net/l/quote/uwtahukh" className="flex items-center justify-center w-full h-full">
                                        <img src="/link.svg" alt="Link" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer className='border-4 border-black-300 p-4 rounded-2xl shadow-lg'>
                        <div className="space-y-8">
                            {/* Header Section */}
                            <div className="text-3xl text-green-300 items-center justify-center flex">Shriniwas Prachand</div>
                            <h1 className="text-2xl font-bold flex items-center justify-center">Backend Developer</h1>

                            {/* Image Section */}
                            <div className="flex items-center justify-center bg-black text-white">
                                <img
                                    src="/Shriniwas.jpeg"
                                    alt="Shriniwas"
                                    className="h-[50vh] rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 leading-relaxed text-gray-300">
                                <p>
                                    I am a dedicated Full Stack Web Developer with a passion for creating dynamic, responsive applications, and I have been doing this for one year.

                                    I have also used many UI tools like Aceternity UI, Shadcn UI, Sentry for bug reporting, Stripe for payment transactions, and Clerk for authentication.


                                </p>
                                <p>
                                    Currently, I am expanding my expertise in Python for machine learning, utilizing powerful libraries like Pandas, NumPy, and Matplotlib. Additionally, I am enhancing my skills in Java and Data Structures & Algorithms to further bolster my technical proficiency and problem-solving capabilities.
                                </p>
                                <p>
                                    I am also currently working on an in-house project for PICT, which is for the canteen, under the guidance of Vaishali Kandekar ma'am.

                                    Aspiring for a challenging carrer in Software Development as to use my learned skills and experience
                                    for best results .
                                </p>
                            </div>
                            <div className='flex items-center md:gap-3 gap-6'>
                                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                    <a href="https://arc.net/l/quote/uwtahukh" className="flex items-center justify-center w-full h-full">
                                        <img src="/link.svg" alt="Link" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer className='border-4 border-black-300 p-4 rounded-2xl shadow-lg'>
                        <div className="space-y-8">
                            {/* Header Section */}
                            <div className="text-3xl text-green-300 items-center justify-center flex">Vaibhavi Palande</div>
                            <h1 className="text-2xl font-bold flex items-center justify-center">Frontend Developer</h1>

                            {/* Image Section */}
                            <div className="flex items-center justify-center bg-black text-white">
                                <img
                                    src="/Vaibhavi.jpeg"
                                    alt="Vaibhavi"
                                    className="h-[50vh] rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 leading-relaxed text-gray-300">
                                <p>
                                    I am a dedicated Full Stack Web Developer with a passion for creating dynamic, responsive applications, and I have been doing this for one year.

                                    I have also used many UI tools like Aceternity UI, Shadcn UI, Sentry for bug reporting, Stripe for payment transactions, and Clerk for authentication.


                                </p>
                                <p>
                                    Currently, I am expanding my expertise in Python for machine learning, utilizing powerful libraries like Pandas, NumPy, and Matplotlib. Additionally, I am enhancing my skills in Java and Data Structures & Algorithms to further bolster my technical proficiency and problem-solving capabilities.
                                </p>
                                <p>
                                    I am also currently working on an in-house project for PICT, which is for the canteen, under the guidance of Vaishali Kandekar ma'am.

                                    Aspiring for a challenging carrer in Software Development as to use my learned skills and experience
                                    for best results .
                                </p>
                            </div>
                            <div className='flex items-center md:gap-3 gap-6'>
                                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                    <a href="https://arc.net/l/quote/uwtahukh" className="flex items-center justify-center w-full h-full">
                                        <img src="/link.svg" alt="Link" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer className='border-4 border-black-300 p-4 rounded-2xl shadow-lg'>
                        <div className="space-y-8">
                            {/* Header Section */}
                            <div className="text-3xl text-green-300 items-center justify-center flex">Himesh Laddha</div>
                            <h1 className="text-2xl font-bold flex items-center justify-center">Machine Learning</h1>

                            {/* Image Section */}
                            <div className="flex items-center justify-center bg-black text-white">
                                <img
                                    src="/Himesh.jpeg"
                                    alt="Himesh"
                                    className="h-[50vh] rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4 leading-relaxed text-gray-300">
                                <p>
                                    I am a dedicated Full Stack Web Developer with a passion for creating dynamic, responsive applications, and I have been doing this for one year.

                                    I have also used many UI tools like Aceternity UI, Shadcn UI, Sentry for bug reporting, Stripe for payment transactions, and Clerk for authentication.


                                </p>
                                <p>
                                    Currently, I am expanding my expertise in Python for machine learning, utilizing powerful libraries like Pandas, NumPy, and Matplotlib. Additionally, I am enhancing my skills in Java and Data Structures & Algorithms to further bolster my technical proficiency and problem-solving capabilities.
                                </p>
                                <p>
                                    I am also currently working on an in-house project for PICT, which is for the canteen, under the guidance of Vaishali Kandekar ma'am.

                                    Aspiring for a challenging carrer in Software Development as to use my learned skills and experience
                                    for best results .
                                </p>
                            </div>
                            <div className='flex items-center md:gap-3 gap-6'>
                                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                    <a href="https://arc.net/l/quote/uwtahukh" className="flex items-center justify-center w-full h-full">
                                        <img src="/link.svg" alt="Link" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContainer>

                </TracingBeam>
            </div>
        </>
    )
}

export default AboutUs

