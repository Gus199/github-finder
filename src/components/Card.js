import React from 'react'

function Card({children}) {
  return (
    <div className="absolute inset-0">
      {children}
    </div>
  )
}

export default Card
