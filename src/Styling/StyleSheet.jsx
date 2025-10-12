import React from 'react'
import './Mystyle.css'

function StyleSheet(props) {
  let className = props.primary ? 'primary' : '';
  return (
    <div>
      {/* <h1 className='primary'>StyleSheet</h1> */}
      {/* <h1 className={className}>StyleSheet</h1> */}
      <h1 className={`${className} font-x`}>StyleSheet</h1>
    </div>
  )
}

export default StyleSheet
