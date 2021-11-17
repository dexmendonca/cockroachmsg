import WebSocket, { WebSocketServer } from "ws";

const ws = new WebSocketServer({
  port: 9501,
  perMessageDeflate: {
    zlibDeflateOptions: { chunkSize: 1024, memLevel: 7, level: 3 },
    zlibInflateOptions: { chunkSize: 10 * 1024 },

    clientNoContextTakeover: true,
    serverNoContextTakeover: true,
    serverMaxWindowBits: 10,

    concurrencyLimit: 10,
    threshold: 1024,
  },
});

ws.on("listening", () => {
  console.log("Running 9501");
});

ws.on("connection", () => {
  console.log("New Connection");
});
