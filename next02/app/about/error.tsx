'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Error caught in /about:', error)
  }, [error])

  return (
    <div>
      <h2>Oops! Something went wrong in the About page.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
