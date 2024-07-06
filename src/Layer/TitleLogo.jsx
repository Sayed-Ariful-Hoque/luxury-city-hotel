import React from 'react'
import FollowUsInstagramLogo from "/src/assets/FollowUsInstagram/title_line.svg"


function TitleLogo({h2Text, className, pText, classNameP, classNameimgs, classNameh2}) {
    return (
        <>
            <div className={`topPart text-center ${className}`}>
            <p className={` afterimgs tracking-[4px] uppercase text-[#7f746e] gap-x-6 flex items-center justify-center text-center ${classNameP}`}><span><img className={`inline ${classNameimgs}`} src={FollowUsInstagramLogo} alt="FollowUsInstagramLogo" /></span> {pText}</p>
                <h2 className={`text-5xl mt-5 mb-10 ${classNameh2}`}>{h2Text}</h2>
            </div>
        </>
    )
}

export default TitleLogo