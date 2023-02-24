import React from 'react'

export default function SelectedBorders({ selectPositionBorder, setBorderPosition }) {

  function borderPosition(item) {
    if (item === 'All') {
      setBorderPosition('');
    } else {
      setBorderPosition(item);
    }
  }

  return (
    <div className='box'>
      <label htmlFor="position">Position</label>
      {selectPositionBorder.map(item => {
        return (
          <button id='position' key={item} onClick={() => { borderPosition(item) }}>{item}</button>
        )
      })}
    </div>
  )
}
