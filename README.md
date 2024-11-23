# NTP Server and Client

## Description
This project implements a Network Time Protocol (NTP) server and client in TypeScript. The NTP server provides accurate time synchronization to clients over the network, ensuring that all connected devices maintain the same time.

## Installation

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

### Using Docker

To start the NTP server using Docker Compose, run the following command:

```bash
docker-compose up
```

To run the container in detached mode, use:

```bash
docker-compose up -d
```

To stop the services, run:

```bash
docker-compose down
```

## License

This project is licensed under the MIT License.
