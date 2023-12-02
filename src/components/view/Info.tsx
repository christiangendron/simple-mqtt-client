import React from 'react'

/**
 * Simple header with information about the project
 * @returns JSX.Element
 */
function Info() {
  return (
    <div className="flex flex-row items-center justify-between bg-secondary rounded-lg p-5 gap-5">
        <div>
            <h1 className="text-white font-bold">MQTT CLIENT</h1>
            <p className="text-white">Simple MQTT client, the following device are only linked by the broker.</p>
        </div>
    </div>
  )
}

export default Info