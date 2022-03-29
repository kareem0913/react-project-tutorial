import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bsg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  useEffect(() => {
    const time = setTimeout(() => setAlert(false), 2000);
    return () => clearTimeout(time);
  }, [alert])
  return <article
   className={index > 10 ? 'color-light' : 'color'} 
   style={{backgroundColor:`rgb(${bsg})`}}
   onClick={() => {
     setAlert(true);
     navigator.clipboard.writeText(hex);
   }}
   >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
    {/* <p className="color-value">{hexColor}</p> */}
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
