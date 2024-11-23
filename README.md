# NTP Server and Client

## Description
This project implements a simple Network Time Protocol (NTP) server and test client in TypeScript. The NTP server provides accurate time synchronization to clients over the network, using the time from the host server, ensuring that all connected devices maintain the same time on the network.

### Why?
I created this as a result of my ISP's NTP time servers randomly going out of sync by a few hours and in some cases days. The host server uses an Atomic Reference Timing Card (ART CARD) installed that keeps precise timing using an mRO-50 Rubidium Atomic Clock. 

This server then provides the correct time to the rest of the network based on the hosts atomic time. I also wanted to learn how to use UDP Datagrams with Typescript.

### No Warranty "AS IS"
This project is "as is" and implies no warranty, merchantability, or fitness guarantee either implied or otherwise. I am not responsible for any issues of realtime uses in any medical or other industry related fields requiring time sensitive accuracy.

### ART Card & Disclaimer
If you want to use the same setup as me, you can find the ART Card here:
> https://safran-navigation-timing.com/product/art-card/
 
You can use whatever you want to sync your server to get the correct time. This is just what I chose to use. I don't get paid or make any commission from Safran. Donations are always welcomed.

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
