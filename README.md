# WebSocket 1v1 Server

A Node.js backend for a 1v1 multiplayer application (potentially for use with the FastFingers typing speed tester). This project uses `express` and the `ws` library to handle real-time WebSocket connections, matchmaking, and message passing between paired clients.

Check the typing speed tester app : [Fast Fingers](https://github.com/kv-18-vk/Typing-Speed-Tester)

## Features

- **Matchmaking:** Automatically pairs clients into 1v1 rooms as they connect to the server.
- **Random Text Generation:** Upon matching, sends both players an identical random 50-word passage (extracted from an embedded story text) for use in a typing test or game.
- **Real-Time Communication:** Relays chat messages and game state directly between the matched opponents.
- **Disconnection Handling:** Detects when a user disconnects and notifies their opponent that they have quit.

## Project Structure

- `server.js`: The main Express and WebSocket server logic. Handles matchmaking, room management, and message broadcasting.
- `client.html`: A simple frontend client to test the WebSocket connection and chat functionality.
- `package.json`: Project dependencies and metadata.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)

## Installation

1. Open a terminal in the project directory.
2. Install the required dependencies (`express` and `ws`):
   ```bash
   npm install
   ```

## Running the Server

Start the server using Node:
```bash
node server.js
```
The server will start on port `3000` by default. You can specify a different port using the `PORT` environment variable. 
For example, on Windows (PowerShell):
```powershell
$env:PORT=8080; node server.js
```

## Testing with the Client

1. Start the WebSocket server.
2. Open `client.html` in two separate browser windows or tabs.
3. Both clients will automatically connect to `ws://localhost:3000` and be paired together into a room.
4. You can use the input box to send messages, which will be relayed to the opposing client in real-time.
