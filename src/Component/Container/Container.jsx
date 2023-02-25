import React, { useState } from 'react'
import BorderRadius from '../BorderRadius/BorderRadius'
import BorderWidth from '../BorderWidth/BorderWidth'
import '../Container/Container.css'
import SelectColor from '../SelectColor/SelectColor'
import SelectedBorders from '../SelectedBorder/SelectedBorders'
import StylesBorder from '../StylesBorder/StylesBorder'

export default function Container() {

    const selectTypeBorder = [
        'solid',
        'dotted',
        'dashed',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'hidden',
        'none',
    ];
    const selectPositionBorder = [
        'All', 'Top', 'Right', 'Bottom', 'Left'
    ];
    const [borderStyle, setBorderStyle] = useState('solid');
    const [borderPosition, setBorderPosition] = useState('');
    const [borderWidth, setBorderWidth] = useState(1);
    const [borderColor, setBorderColor] = useState('black');
    const [borderRadius, setBorderRadius] = useState(0);
    const [borderLeftTop, setBorderLeftTop] = useState(0);
    const [borderLeftBottom, setBorderLeftBottom] = useState(0);
    const [borderRightTop, setBorderRightTop] = useState(0);
    const [borderRightBottom, setBorderRightBottom] = useState(0);


    return (
        <div className='container'>
            <div className='left-side'>
                <BorderWidth setBorderWidth={setBorderWidth} />
                <StylesBorder selectTypeBorder={selectTypeBorder} setBorderStyle={setBorderStyle} borderWidth={borderWidth} borderColor={borderColor} />
                <SelectColor setBorderColor={setBorderColor} />
                <SelectedBorders selectPositionBorder={selectPositionBorder} setBorderPosition={setBorderPosition} />
                <BorderRadius setBorderRadius={setBorderRadius} setBorderLeftTop={setBorderLeftTop} setBorderLeftBottom={setBorderLeftBottom} setBorderRightTop={setBorderRightTop} setBorderRightBottom={setBorderRightBottom} />
            </div>

            <div className='two-boxes'>
                <div className='box-size' style={{
                    [`border${borderPosition}`]: borderStyle,
                    borderColor: `${borderColor}`,
                    borderWidth: `${borderWidth}px`,
                    borderRadius: `${borderRadius}px`,
                    borderTopLeftRadius: `${borderLeftTop}px`,
                    borderBottomLeftRadius: `${borderLeftBottom}px`,
                    borderTopRightRadius: `${borderRightTop}px`,
                    borderBottomRightRadius: `${borderRightBottom}px`
                }}>
                    <h1>Preview</h1>
                </div>

                <div className='output-box'>
                    <p>border: {`${borderStyle}`};</p>
                    <p>border-radius: {borderRadius}px;</p>
                </div>
            </div>
        </div>
    )
}
