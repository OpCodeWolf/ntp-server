import dgram, { RemoteInfo } from 'dgram';

const server = dgram.createSocket('udp4');

const NTP_PORT = 123;

server.on('message', (msg: Buffer, rinfo: RemoteInfo) => {
  // Log the incoming request
  console.log(`Received request from ${rinfo.address}:${rinfo.port} at ${new Date().toISOString()}`);

  const response = Buffer.alloc(48);
  response.fill(0);
  response[0] = 0x1b; // NTP version and mode
  const timestamp = Math.floor(Date.now() / 1000) + 2208988800; // Convert to NTP time
  response.writeUInt32BE(timestamp, 40); // Write the timestamp to the response
  server.send(response, 0, response.length, rinfo.port, rinfo.address);
});

// Bind to 0.0.0.0 to accept requests from any interface
server.bind(NTP_PORT, '0.0.0.0', () => {
  console.log(`NTP server is running on 0.0.0.0:${NTP_PORT}`);
});
