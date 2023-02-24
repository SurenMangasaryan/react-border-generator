import React from 'react'

export default function StylesBorder({ selectTypeBorder, setBorderStyle, borderWidth, borderColor }) {
    return (
        <div>
            <label htmlFor="style">Style</label>
            {selectTypeBorder.map(item => {
                return (
                    <button id='style' key={item} onClick={() => { setBorderStyle(`${borderWidth}px ${item} ${borderColor}`) }}>{item}</button>
                )
            })}
        </div>
    )
}
