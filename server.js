const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Optional: handle root ping so Render knows the service is alive
app.get('/', (req, res) => {
  res.send("WebSocket server is running!");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const rooms = new Map();
let waitingQueue = [];

function createRoom(player1, player2) {
  const roomId = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  rooms.set(roomId, { player1, player2 });

  player1.roomId = roomId;
  player2.roomId = roomId;
  player1.opponent = player2;
  player2.opponent = player1;

  [player1, player2].forEach(player => {
    player.send(JSON.stringify({ type: "status"}));
    player.on('message', msg => {
        const parsed = JSON.parse(msg);
        if (player.opponent && player.opponent.readyState === WebSocket.OPEN) {
          player.opponent.send(JSON.stringify(parsed));
        }
    });

    player.on('close', () => {
      if (player.opponent && player.opponent.readyState === WebSocket.OPEN) {
        player.opponent.send(JSON.stringify({ type: "opponent_quit" }));
      }
      rooms.delete(player.roomId);
    });
  });
}

wss.on('connection', (user) => {
  waitingQueue.push(user);
  if (waitingQueue.length >= 2) {
    const player1 = waitingQueue.shift();
    const player2 = waitingQueue.shift();
    createRoom(player1, player2);
  }

  user.on('close', () => {
    waitingQueue = waitingQueue.filter(p => p !== user);
  });
});


// Render sets PORT - via env variable
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




