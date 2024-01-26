import React from 'react'

export default function StylesBorder({ selectTypeBorder, setBorderStyle }) {
    return (
        <div>
            <label htmlFor="style">Style</label>
            {selectTypeBorder.map(item => {
                return (
                    <button id='style' key={item} onClick={() => { setBorderStyle(item) }}>{item}</button>
                )
            })}
        </div>
    )
}
