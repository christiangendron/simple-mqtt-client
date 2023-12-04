"use client";

import React from 'react'
import Device from '../shared/Device'
import useReceiverClient from '@/hooks/useReceiverClient';

/**
 * Receiver component, display devices
 * @returns JSX.Element
 */
export default function Receiver() {
    const { receivercolor, toggleReceiver, receiverDevices } = useReceiverClient();

    return (
        <>
            <div className={"rounded-lg flex flex-1 p-5 text-white justify-center hover:cursor-pointer" + receivercolor} onClick={toggleReceiver}>
                Receiver
            </div>
            <div className="flex flex-row w-full gap-2">
                <Device device={receiverDevices[0]} />
                <Device device={receiverDevices[1]} />
                <Device device={receiverDevices[2]} />
            </div>
        </>
    )
}