import React from 'react'

const InputErrors = ({message}) => {
  return (
     <>
         <span className='text-red-600'>{message}</span>
     </>
  )
}

export default InputErrors