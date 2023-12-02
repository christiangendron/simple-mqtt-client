"use client"

import React, {useState} from 'react';
import { Switch } from '@headlessui/react';

type DeviceSwitchProps = {
    name: string;
    initialStatus: boolean;
    handler: (topic: string, message: string) => void;
}

/**
 * DeviceSwitch component, display a switch button to turn on/off a device
 * @param props DeviceSwitchProps
 * @returns JSX.Element
 */
export default function DeviceSwitch(props: DeviceSwitchProps) {
    const [enabled, setEnabled] = useState(props.initialStatus);
    
    const color = enabled ? ' bg-green-500' : ' bg-red-500';

    const onClick = () => {
        const message = enabled ? 'off' : 'on';
        setEnabled(!enabled);
        props.handler(props.name, message);
    };

    return (
        <div className="flex flex-1 flex-col h-48 bg-secondary rounded-lg items-center text-white justify-center">
            <h1>{props.name.split('/')[2]}</h1>
            <Switch checked={enabled} onChange={onClick} className={`${color} relative inline-flex h-6 w-11 items-center my-3 rounded-full`}>
                <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
            </Switch>
        </div>
    );
}
