"use client"

import React, {useEffect, useState} from 'react';
import minus from '../../../public/assets/minus.png';
import plus from '../../../public/assets/plus.png';
import Image from 'next/image';

type DialPropsProps = {
    device: {
        name: string;
        message: string;
    },
    handler: (topic: string, message: string) => void;
}

/**
 * Dial component, display a dial to change the temperature of a device
 * @param props DialPropsProps
 * @returns JSX.Element
 */
export default function Dial(props: DialPropsProps) {
    const [number, setNumber] = useState(parseInt(props.device.message));
    
    useEffect(() => {
        setNumber(parseInt(props.device.message));
    }, [props.device.message]);

    const increment = () => {
        setNumber((prevNumber) => {
            const newNumber = prevNumber + 1;
            const message = newNumber.toString();
            props.handler(props.device.name, message);
            return newNumber;
        });
    };

    const decrement = () => {
        setNumber((prevNumber) => {
            const newNumber = prevNumber - 1;
            const message = newNumber.toString();
            props.handler(props.device.name, message);
            return newNumber;
        });
    }

    return(
        <div className="flex flex-1 flex-col h-48 bg-secondary text-white rounded-lg items-center justify-center">
            <h1>{props.device.name.split('/')[2]}</h1>
            <div className='flex flex-row items-center justify-center my-3 gap-3'>
                <p onClick={decrement} className='bg-red-500 rounded-full p-2 hover:cursor-pointer'><Image src={minus} height={10} width={10} alt='minus' /></p>
                <h2>{number}°C</h2>
                <p onClick={increment} className='bg-green-500 rounded-full p-2 hover:cursor-pointer'><Image src={plus} height={10} width={10} alt='plus' /></p>
            </div>
        </div>
    );
}
