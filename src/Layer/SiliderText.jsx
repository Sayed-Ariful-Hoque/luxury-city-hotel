import React from 'react'

function SiliderText({Texth2}) {
    return (
        <>
            <div className=' text-center xl:w-[800px]  text-white drop-shadow mx-auto mt-[10%] px-3 xl:px-0 lg:px-0  '>
                <div>
                    <h2 className='  py-7 font-medium font-serif xl:text-6xl lg:text-5xl text-4xl  '>{Texth2}</h2>
                    <p className='xl:py-10 pb-36 xl:text-[22px] lg:text-[22px] md:text-[20px] font-serif mb-10 '> Donec porta diam eu massa. Quisque diam lorem, interdum
                        vitae, dapibus ac, scelerisque vitae, pede. Donec eget
                        tellus non erat lacinia fermentum. Donec in velit vel
                        ipsum auctor pulvinar. Vestibulum iaculis lacinia est.
                    </p>
                    <div className=' flex flex-wrap gap-4 items-center justify-center'>
                        <a className=' bg-[#bf885e] hover:bg-[#de9d6b] transition-all  duration-500 py-5 px-20 md:px-10 uppercase text-xl ' href="">Book Now</a>
                        <a className=' bg-[#856a54]  hover:bg-[#8b725f] transition-all duration-100 py-5 px-20 md:px-10 uppercase text-xl ' href="">Details</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SiliderText