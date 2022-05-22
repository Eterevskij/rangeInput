import React, { useState } from 'react';
import { Slider } from 'antd';

const RangeInput = (props) => {
    debugger

    const { min, max, pointCount, disabled, error } = props;
    const [value, setValue] = useState(null);

    const sliderHandlerOnePoint = (value) => {
        setValue(value);
    };

    const sliderHandlerTwoPoint = (value) => {
        debugger
        setValue([value[0], value[1]]);
    };

    if (pointCount === 1 && value === null) {
        setValue(max);
    } else if (pointCount === 2 && value === null) {
        setValue([min, max]);
    }

    debugger

    return (
        <div className={`rangeInput__wrapper
                        ${disabled ? 'disabled' : ''}
                        ${error ? 'error' : ''}`}>

            <p className="rangeInput__title">Цена, <span className='rangeInput__title__currency'>₽</span></p>

            <p className="rangeInput__value__wrapper">

                {(pointCount === 1) ?

                    <span className="rangeInput__value__item">{value?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")}</span>

                    : (pointCount === 2) ?
                        <>
                            <span className="rangeInput__value__item">{value?.[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")}</span>
                            <span className="rangeInput__value__item line">-</span>
                            <span className="rangeInput__value__item">{value?.[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")}</span>
                        </>

                        :
                        ''
                }



            </p>

            {(pointCount === 1) ?

                <Slider className="rangeInput__slider onePoint"
                    onChange={sliderHandlerOnePoint}
                    value={value}
                    min={min}
                    step={1000}
                    max={max}
                    disabled={disabled} />

                : (pointCount === 2) ?

                    <Slider range className="rangeInput__slider twoPoint"
                        onChange={sliderHandlerTwoPoint}
                        value={value}
                        min={min}
                        step={1000}
                        max={max}
                        disabled={disabled} /> :
                    ''
            }




        </div>

    )
}

export default RangeInput;


