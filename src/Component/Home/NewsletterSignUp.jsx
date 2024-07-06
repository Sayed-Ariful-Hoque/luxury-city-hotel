import React from 'react'
import TitleLogo from '../../Layer/TitleLogo'

function NewsletterSignUp() {
    return (
        <>
            {/* bg-[#664831] 
            after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#313030] after:z-[-1] z-10  opacity-100 
             bg-[url('/src/assets/NewsletterSignUp/NewsletterSignUpBackground01.svg')] bg-[#664831]  h-[400px] bg-cover bg-center object-cover bg-no-repeat
            */}
            <div className=' '>
                <div className="NewsletterSignUp  relative before:bg-[url('/src/assets/NewsletterSignUp/NewsletterSignUpBackground01.svg')]  before:content-[''] before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 xl:h-[400px] h-auto py-20 before:bg-[#664831] xl:py-0 px-3 xl:mb-20  xl:px-0  ">
                    <div className="TopPart xl:pt-20 relative ">
                        <TitleLogo classNameP=" text-xs font-normal relative  text-[#c2b0a3]  " className="text-white relative text-start xl:text-center lg:text-center md:text-center " pText="Join Our Mailing List" h2Text="Newsletter Sign Up" />
                    </div>
                    <div className="bottomPart xl:w-[800px] lg:w-[700px] md:w-[700px] mx-auto ">
                        <div className='xl:flex  xl:gap-x-8 lg:flex lg:gap-8 md:flex md:gap-10 md:justify-between relative'>
                            <div className=''>
                                <p className='text-[#c2b9b3]'>Sign up for news and special offers </p>
                                <input className=' bg-transparent outline-none text-white border-b-[3px] xl:w-[550px] lg:w-[400px] md:w-[400px] w-full mt-4 pb-3 font-semibold  font-sans placeholder:text-white' type="email" placeholder='Enter Emile Address' />
                            </div>
                            <button className=' uppercase bg-[#bf885e] text-white  xl:px-9 xl:py-2 lg:px-10 md:w-60  w-full py-6 font-semibold mt-3 xl:mt-0 lg:mt-0'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsletterSignUp