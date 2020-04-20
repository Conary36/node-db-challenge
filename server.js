const express = require('express');
const helmet = require('helmet');

const projRouter = require('./project/project-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.get('/', (req, res) => {
    const nameInsert = req.name ? `${req.name}`: "";

    res.send(`
        <h2>Project API</h2>
        <p> ${nameInsert}, let's see the projects</p>
    `);
});

module.exports = server;

