import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';

export default function BorderWidth({ setBorderWidth }) {

  const [widthVal, setWidthVal] = useState(0)

  const borderWidthFunc = useCallback((e) => {
    setWidthVal(e.target.value);
    setBorderWidth(e.target.value);
  }, [setBorderWidth])

  return (
    <div className='box'>
      <label htmlFor="width">Width</label>
      <input type="range" id='width' value={widthVal} min={0} max={50} step={1} onChange={(e) => {
        borderWidthFunc(e);
      }} />
    </div>
  )
}
