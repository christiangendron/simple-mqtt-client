import { useState, useEffect } from 'react';
import broadcasterClient from "../services/BroadcasterClient";

/**
 * Custom hook for all sender client related logic
 * @returns senderHook object (senderConnected, senderColor, publish, toggleSender)
 */
export default function useSenderClient() {  
    const [senderConnected, setSenderConnected] = useState(false);

	const senderColor = senderConnected ? ' bg-green-500' : ' bg-red-500';

    useEffect(() => {
		broadcasterClient.on('connect', () => {
			setSenderConnected(true);
		});
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
        toggleSender
    }

    return senderHook;
}