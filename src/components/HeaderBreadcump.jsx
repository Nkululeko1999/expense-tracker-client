import React from 'react'

function HeaderBreadcump({title}) {
  return (
    <div>
      <div className='bg-teal-950 shadow-lg'>
        <h1 className='text-xl sm:text-3xl font-mono font-semibold sm:font-bold text-center text-white py-4'>{title}</h1>
      </div>
    </div>
  )
}

export default HeaderBreadcump
