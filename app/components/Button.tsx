import React from 'react'

const Button = ({text} : {text: string}) => {
  return (
    <button className='border-slate-400 shadow-md hover:bg-slate-800 hover:text-white transition-[0.3s] border rounded-xl px-4 mt-4 py-3'>{text}</button>
  )
}

export default Button