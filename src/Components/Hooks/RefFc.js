import React, { useEffect, useRef } from 'react'

export default function RefFc() {

  const reff = useRef(null)

  useEffect(() => {
    reff.current.focus()
  }, [])
  return (
    <>
      <input ref={reff} type="text" />
    </>
  )
}
