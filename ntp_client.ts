import dgram from 'dgram';

const client = dgram.createSocket('udp4');
const NTP_PORT = 123;
const NTP_SERVER = '172.17.0.3'; // Updated to the container's IP address

const request = Buffer.alloc(48);
request.fill(0);
request[0] = 0x1b; // NTP version and mode

client.send(request, NTP_PORT, NTP_SERVER, (err) => {
  if (err) {
    console.error('Error sending request:', err);
    client.close();
    return;
  }
  console.log('Request sent to NTP server');
});

client.on('message', (msg) => {
  const timestamp = msg.readUInt32BE(40) - 2208988800; // Convert from NTP time
  console.log('Current time (UTC):', new Date(timestamp * 1000).toISOString());
  client.close();
});

client.on('error', (err) => {
  console.error('Client error:', err);
  client.close();
});
