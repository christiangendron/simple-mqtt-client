"use client";

import React from 'react'
import DeviceSwitch from '../shared/DeviceSwitch';
import useSenderClient from '../../hooks/useSenderClient';
import Dial from '../shared/Dial';
import useDevices from '@/hooks/useDevices';

/**
 * Broadcaster component, display the broadcaster switch button and the devices
 * @returns JSX.Element
 */
export default function Broadcaster() {
    const { senderColor, publish, toggleSender } = useSenderClient();
	const { registeredDeviced } = useDevices();

	return (
		<>
			<div className={"rounded-lg flex flex-1 p-5 justify-center text-white hover:cursor-pointer" + senderColor} onClick={toggleSender}>
				Broadcaster
			</div>
			<div className="flex flex-row w-full gap-2">
				<DeviceSwitch name={registeredDeviced[0].name} handler={publish} initialStatus={false} />
				<DeviceSwitch name={registeredDeviced[1].name} handler={publish} initialStatus={false} />
				<Dial name={registeredDeviced[2].name} handler={publish} initialStatus={20} />
			</div>
		</>
	);
}

