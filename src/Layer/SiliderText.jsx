import React from 'react'

function SiliderText({Texth2}) {
    return (
        <>
            <div className=' text-center w-[800px] text-white drop-shadow mx-auto mt-[10%]  '>
                <div>
                    <h2 className=' font-medium font-serif text-6xl '>{Texth2}</h2>
                    <p className='py-10 text-[22px] font-serif '> Donec porta diam eu massa. Quisque diam lorem, interdum
                        vitae, dapibus ac, scelerisque vitae, pede. Donec eget
                        tellus non erat lacinia fermentum. Donec in velit vel
                        ipsum auctor pulvinar. Vestibulum iaculis lacinia est.
                    </p>
                    <div className=' flex gap-4 items-center justify-center'>
                        <a className=' bg-[#bf885e] hover:bg-[#de9d6b] transition-all  duration-500 py-5 px-20 uppercase text-xl ' href="">Book Now</a>
                        <a className=' bg-[#856a54]  hover:bg-[#8b725f] transition-all duration-100 py-5 px-20 uppercase text-xl ' href="">Details</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SiliderText