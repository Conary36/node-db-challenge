const express = require('express');
const helmet = require('helmet');

const projRouter = require('./project/project-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/build", projRouter);

module.exports = server;

