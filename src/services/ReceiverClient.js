import mqtt from 'mqtt';

// MQTT Client for receiving

const receiverClient = mqtt.connect('ws://broker.hivemq.com:8000/mqtt');

const connectionTimeout = 5000;

let connected = false;

const connectionTimer = setTimeout(() => {
  if (!connected) {
    console.error('Receiver timeout. Unable to connect to MQTT broker.');
    receiverClient.end();
  }
}, connectionTimeout);

receiverClient.on("connect", () => {
  connected = true;
  clearTimeout(connectionTimer);
});

export default receiverClient;
