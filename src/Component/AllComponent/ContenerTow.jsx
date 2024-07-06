import React from 'react'

function ContenerTow({children, className}) {
  return (
    <div className={` ${className}`}>{children}</div>
  )
}

export default ContenerTow