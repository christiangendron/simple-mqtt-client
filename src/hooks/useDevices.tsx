import { useState } from 'react';

/**
 * Custom hook for all devices
 * @returns devices (registeredDeviced, setRegisteredDevices)
 */
export default function useDevices() {  
    const [registeredDeviced, setRegisteredDevices] = useState([
        {
            name: 'cgendron/home/kitchen',
            message: 'off',
            type: 'switch'
        },
        {
            name: 'cgendron/home/bedroom',
            message: 'off',
            type: 'switch'
        },
        {
            name: 'cgendron/home/livingroom/temp',
            message: '20',
            type: 'dial'
        }
    ]);


    const devices = {
        registeredDeviced,
        setRegisteredDevices,
    }

    return devices;
}