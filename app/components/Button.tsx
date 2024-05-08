import React from 'react'

const Button = ({text} : {text: string}) => {
  return (
    <button className='bg-slate-900 rounded-xl px-4 mt-4 py-3 text-white'>{text}</button>
  )
}

export default Button