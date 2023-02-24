import React from 'react'

export default function SelectColor({ setBorderColor }) {

    let color;

    return (
        <div>
            <label htmlFor="color">Color</label>
            <input id='color' type="color" onChange={(e) => {
                color = setTimeout(() => {
                    setBorderColor(e.target.value)
                }, 500);

                return () => {
                    clearTimeout(color)
                }
            }} />
        </div>
    )
}
