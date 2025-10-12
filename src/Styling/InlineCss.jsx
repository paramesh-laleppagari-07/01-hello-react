import React from 'react'

function InlineCss() {
    const heading = {
        fontSize : '70px',
        color : 'blue',
        textAlign : 'center'
    }   
  return (
    <div>
      <h1 style={heading}>InlineStyle</h1>
    </div>
  )
}

export default InlineCss
