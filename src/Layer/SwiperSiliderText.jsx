import React from 'react'

function SwiperSiliderText({h4Text, src, alt, className}) {
    return (
        <>
            <div className={`siliderimages01 bg-red-200  relative ${className}`}>
                <img src={`${src}`} alt={`${alt}`} />
                <div className=' absolute xl:top-[55%] lg:top-[50%] md:top-[50%] sm:top-[50%] top-[70%]  xl:left-[38px]  bg-[#f5f0eb] xl:w-[800px] p-10  transition-[.5s] ease-in-out'>
                    <h4 className='xl:text-4xl text-2xl font-serif'>{h4Text}</h4>
                    <p className='py-8 xl:text-xl text-[#544a43] '>  Mauris fermentum dictum magna. Sed laoreet aliquam leo.
                        Ut tellus dolor, dapibus eget, elementum vel, cursus
                        eleifend, elit. Aenean auctor wisi et urna.</p>
                    <div className=' flex flex-col gap-y-3 '>
                        <spanm className=' font-serif'>From</spanm>
                        <div className='flex flex-wrap justify-between'>
                            <div>
                                <span className='text-3xl'>$299/</span>
                                <span className=' font-serif'>stay</span>
                            </div>
                            <a href="#" className=' py-5 px-14 uppercase text-white bg-[#bf885e] hover:bg-[#df9c69]'>View offer</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwiperSiliderText