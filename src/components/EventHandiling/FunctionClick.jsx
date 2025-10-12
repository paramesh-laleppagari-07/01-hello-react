import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  function clickHandler() {
    console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
