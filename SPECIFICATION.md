# NTP Server and Client Specification

## Project Overview
This project implements a Network Time Protocol (NTP) server and client in TypeScript. The NTP server provides accurate time synchronization to clients over the network, ensuring that all connected devices maintain the same time.

## Features
- Accurate time synchronization
- Simple command-line interface for both server and client
- Written in TypeScript for type safety and maintainability

## Architecture
The project consists of two main components:
1. **NTP Server**: Listens for incoming requests from clients and responds with the current time.
2. **NTP Client**: Sends requests to the NTP server to retrieve the current time.

## API Specification
### NTP Server
- **Port**: `123`
- **Protocol**: `UDP Datagram`
  **Protocol Version**: `4`
- **Response**: Returns the current time in UTC.

### NTP Client
- The client does not expose an API but interacts with the server using the above UDP datagram.

## Installation and Setup
To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage
### Starting the NTP Server
To start the NTP server, run the following command:

```bash
ts-node ntp_server.ts
```

### Running the NTP Client
To use the NTP client to synchronize time with the server, run:

```bash
ts-node ntp_client.ts
```

## License
This project is licensed under the MIT License.
