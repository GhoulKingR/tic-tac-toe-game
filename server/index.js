let WebSocketServer = require('ws').Server,
    tokens = {},
    wss = new WebSocketServer({ port: 8080 });

