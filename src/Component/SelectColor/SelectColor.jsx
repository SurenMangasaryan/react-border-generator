import React from 'react'
import { useCallback } from 'react';

export default function SelectColor({ setBorderColor }) {
    
    const setColorFunc = useCallback((e) => {
        setBorderColor(e.target.value);
    }, [setBorderColor])

    return (
        <div className='box'>
            <label htmlFor="color">Color</label>
            <input id='color' type="color" onChange={(e) => {
                setColorFunc(e);
            }} />
        </div>
    )
}
