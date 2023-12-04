"use client";

import React from 'react'
import DeviceSwitch from '../shared/DeviceSwitch';
import Dial from '../shared/Dial';
import useBroadcasterClient from '../../hooks/useBroadcasterClient';

/**
 * Broadcaster component, display the broadcaster switch button and the devices
 * @returns JSX.Element
 */
export default function Broadcaster() {
    const { senderColor, publish, toggleSender, broadcasterDevices } = useBroadcasterClient();

	return (
		<>
			<div className={"rounded-lg flex flex-1 p-5 justify-center text-white hover:cursor-pointer" + senderColor} onClick={toggleSender}>
				Broadcaster
			</div>
			<div className="flex flex-row w-full gap-2">
				<DeviceSwitch device={broadcasterDevices[0]} handler={publish}  />
				<DeviceSwitch device={broadcasterDevices[1]} handler={publish} />
				<Dial device={broadcasterDevices[2]} handler={publish} />
			</div>
		</>
	);
}

