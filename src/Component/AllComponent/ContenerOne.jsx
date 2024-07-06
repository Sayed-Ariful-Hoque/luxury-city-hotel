import React from 'react'

function ContenerOne({children, className}) {
  return (
    <div className={`xl:w-[1424px] xl:mx-auto  ${className}`}>{children}</div>
  )
}

export default ContenerOne