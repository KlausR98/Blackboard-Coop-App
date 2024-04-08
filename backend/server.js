const express = require("express");
const app = express();

const server = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

//ścieżki
app.get("/", (req, res) => {
  res.send(
    "To jest aplikacja Blackboard Cooperate oficjalny serwer by Szymon Rodak"
  );
});

io.on("connection", (socket) => {
  console.log("Użytkownik został połączony");
});

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log("Serwer działa na adresie http://localhost:5000")
);

// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*" // Dla produkcji zaleca się ograniczenie do konkretnych domen
//   }
// });

// io.on("connection", (socket) => {
//   console.log("Użytkownik połączył się:", socket.id);

//   socket.on("SEND_MESSAGE", (data) => {
//     io.emit("MESSAGE", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("Użytkownik rozłączył się:", socket.id);
//   });
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//   console.log(`Serwer działa na porcie ${PORT}`);
// });
