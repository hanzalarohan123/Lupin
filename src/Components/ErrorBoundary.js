import React from 'react'

function ErrorBoundary({heroname}) {
    if (heroname ==='joker')
    {
        throw new Error('not a hero')
    }
  return (
    <div>{heroname}</div>
  )
}

export default ErrorBoundary