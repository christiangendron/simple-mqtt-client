import { useState, useEffect } from 'react';
import broadcasterClient from "../services/BroadcasterClient";
import useBroadcasterDevices from './useBroadcasterDevices';

/**
 * Custom hook for all sender client related logic
 * @returns senderHook object (senderConnected, senderColor, publish, toggleSender)
 */
export default function useBroadcasterClient() {  
    const [senderConnected, setSenderConnected] = useState(false);
    const { broadcasterDevices, setBroadcasterDevices } = useBroadcasterDevices();

	const senderColor = senderConnected ? ' bg-green-500' : ' bg-red-500';

    useEffect(() => {
		broadcasterClient.on('connect', () => {
			setSenderConnected(true);
		});

		broadcasterClient.on('message', (topic, message) => {
            setBroadcasterDevices(prevDevices => {
                const updatedDevices = [...prevDevices];
                const device = updatedDevices.find(device => device.name === topic);
                if (device) {
                    device.message = message.toString();
                }
                return updatedDevices;
            });
        });

		broadcasterClient.subscribe('cgendron/home/#');
	}, []);

	const publish = (topic: string, message: string) => {
		broadcasterClient.publish(topic, message, {qos: 2, retain: true});
	};

	const toggleSender = () => {
		if (senderConnected) {
			broadcasterClient.end();
			setSenderConnected(false);
		} else {
			broadcasterClient.reconnect();
			setSenderConnected(true);
		}
	};

    const senderHook = {
        senderConnected,
        senderColor,
        publish,
        broadcasterDevices,
        toggleSender
    }

    return senderHook;
}