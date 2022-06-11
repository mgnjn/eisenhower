const express = require("express");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = 4000;

server.get("/echo", (req, res) => {
  return "hello!";
});

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON server running on port ${port}`);
});
