import Image from 'next/image';
import React from 'react';
import on from '../../../public/assets/on.png';

export type DeviceProps = {
    device: {
        name: string;
        message: string;
        type: string;
    }
};

/**
 * Simple device component, display the name of the device and the message (simple text or temperature)
 * @param props DeviceProps
 * @returns JSX.Element
 */
export default function Device(props: DeviceProps) {
    let content = null;
    
    if (props.device.type === 'switch') {
        const color = props.device.message === 'on' ? 'bg-green-500' : 'bg-red-500';

        content = <div className={`p-3 rounded-full mb-3 ${color}`} >
            <Image src={on} width={50} height={50} alt='on/off button' />
        </div>
    } else {
        content = <p className='text-6xl'>{props.device.message}°C</p>;
    }

    return (
        <div className="flex flex-1 text-white h-48 bg-secondary rounded-lg flex-col items-center justify-center">
            {content}
            <h1>{props.device.name.split('/')[2]}</h1>
        </div>
    );
}
