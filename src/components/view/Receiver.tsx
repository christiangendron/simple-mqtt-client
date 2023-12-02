"use client";

import React from 'react'
import Device from '../shared/Device'
import useReceiverClient from '@/hooks/useReceiverClient';

/**
 * Receiver component, display devices
 * @returns JSX.Element
 */
export default function Receiver() {
    const { receivercolor, registeredDeviced, toggleReceiver } = useReceiverClient();

    return (
        <>
            <div className={"rounded-lg flex flex-1 p-5 text-white justify-center hover:cursor-pointer" + receivercolor} onClick={toggleReceiver}>
                Receiver
            </div>
            <div className="flex flex-row w-full gap-2">
                <Device device={registeredDeviced[0]} />
                <Device device={registeredDeviced[1]} />
                <Device device={registeredDeviced[2]} />
            </div>
        </>
    )
}