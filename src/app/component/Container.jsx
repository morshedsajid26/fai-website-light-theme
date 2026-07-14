import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`w-[92%] sm:w-[90%] md:max-w-[85%]  mx-auto ${className}`} >
      {children}
    </div>
  )
}

export default Container