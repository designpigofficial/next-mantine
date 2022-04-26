import React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[];
}
function TestLayout( { children }: Props ) {
  return (
    <>
      { children }
    </>
  )
}

export default TestLayout