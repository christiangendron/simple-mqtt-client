import { useState } from 'react';

/**
 * Custom hook for all receiving devices
 * @returns devices (registeredDeviced, setRegisteredDevices)
 */
export default function useReceiverDevices() {  
    const [receiverDevices, setReceiverDevices] = useState([
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
        receiverDevices,
        setReceiverDevices,
    }

    return devices;
}