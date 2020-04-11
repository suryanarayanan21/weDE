const app = require("express")();
const cors = require("cors");
const port = 9000;

app.use(cors);

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("Connection established");

  // Listen for changes and emit changes

  socket.on("editor change", (value) => {
    socket.broadcast.emit("remote editor change", value);
  });

  socket.on("disconnect", () => {
    console.log("Connection terminated");
  });
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
