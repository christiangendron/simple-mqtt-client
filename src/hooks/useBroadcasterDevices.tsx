import { useState } from 'react';

/**
 * Custom hook for all broadcasting devices
 * @returns devices (registeredDeviced, setRegisteredDevices)
 */
export default function useBroadcasterDevices() {  
    const [broadcasterDevices, setBroadcasterDevices] = useState([
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
        broadcasterDevices,
        setBroadcasterDevices,
    }

    return devices;
}