import React from 'react'

export default function BorderWidth({ setBorderWidth }) {
  let timeOut;
  return (
    <div className='box'>
      <label htmlFor="width">Width</label>
      <input type="range" id='width' min={0} max={30} step={1} onChange={(e) => {
        //Value ?
        {
          timeOut = setTimeout(() => {
            setBorderWidth(e.target.value);
          }, 500);
        }
        return () => {
          clearTimeout(timeOut)
        }
      }} />
    </div>
  )
}
