import React, { useState } from 'react'

export default function BorderRadius({ setBorderRadius, setBorderLeftTop, setBorderLeftBottom, setBorderRightTop, setBorderRightBottom }) {

    const [bool, setBool] = useState(false);
    let radius;

    function selectBorderRadius(e) {
        if (bool === true) {
            radius = setTimeout(() => {
                setBorderRadius(e.target.value);
            }, 500);

            return () => {
                clearTimeout(radius);
            }
        } else {
            setBorderRadius(0);
        }
    }

    return (
        <div className='box'>
            <label htmlFor="radius">Radius</label>
            <div id='radius'>
                <input type="range" min={0} max={40} step={1} onChange={(e) => bool ? selectBorderRadius(e) : setTimeout(() => {
                    setBorderLeftTop(e.target.value);
                }, 500)} />
                <input type="range" min={0} max={40} step={1} onChange={(e) => {
                    setTimeout(() => {
                        setBorderLeftBottom(e.target.value);
                    }, 500);
                }} />
                <input type="range" min={0} max={40} step={1} onChange={(e) => {
                    setTimeout(() => {
                        setBorderRightTop(e.target.value);
                    }, 500);
                }} />
                <input type="range" min={0} max={40} step={1} onChange={(e) => {
                    setTimeout(() => {
                        setBorderRightBottom(e.target.value);
                    }, 500);
                }} />

                <input className="custom-checkbox" type="checkbox" checked={bool} onChange={(e) => setBool(e.target.checked)} />
                
            </div>

        </div>
    )
}
