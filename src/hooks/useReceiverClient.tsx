import { useState, useEffect } from 'react';
import receiverClient from "../services/ReceiverClient";
import useDevices from './useDevices';

/**
 * Custom hook for all receiver client related logic
 * @returns receiverHook object (receiverConnected, receivercolor, registeredDeviced, toggleReceiver)
 */
export default function useReceiverClient() {  
    const [receiverConnected, setReceiverConnected] = useState(false);
    const receivercolor = receiverConnected ? ' bg-green-500' : ' bg-red-500';

    const { registeredDeviced, setRegisteredDevices } = useDevices();

    useEffect(() => {
		receiverClient.on('connect', () => {
			setReceiverConnected(true);
		});

		receiverClient.on('message', (topic, message) => {
            setRegisteredDevices(prevDevices => {
                const updatedDevices = [...prevDevices];
                const device = updatedDevices.find(device => device.name === topic);
                if (device) {
                    device.message = message.toString();
                }
                return updatedDevices;
            });
        });

        receiverClient.subscribe('cgendron/home/#');
	}, []);

    const toggleReceiver = () => {
		if (receiverConnected) {
			receiverClient.end();
			setReceiverConnected(false);
		} else {
			receiverClient.reconnect();
			setReceiverConnected(true);
		}
	};

    const receiverHook = {
        receiverConnected,
        receivercolor,
        registeredDeviced,
        toggleReceiver
    }

    return receiverHook;
}