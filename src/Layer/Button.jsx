import React from 'react'

function Button({ButtonText, className}) {
  return (
    <button className={` uppercase border px-7 py-2 bg-[#bf885e] text-white rounded-sm  ${className}`}>{ButtonText}</button>
  )
}

export default Button