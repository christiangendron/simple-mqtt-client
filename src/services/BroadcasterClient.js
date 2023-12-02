import mqtt from 'mqtt';

// MQTT Client for broadcasting

const broadcasterClient = mqtt.connect('ws://broker.hivemq.com:8000/mqtt');

const connectionTimeout = 5000;

let connected = false;

const connectionTimer = setTimeout(() => {
  if (!connected) {
    console.error('Sender timeout. Unable to connect to MQTT broker.');
    broadcasterClient.end();
  }
}, connectionTimeout);

broadcasterClient.on("connect", () => {
  connected = true;
  clearTimeout(connectionTimer);
});

export default broadcasterClient;
