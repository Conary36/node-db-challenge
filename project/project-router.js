const express = require("express");

const router = express.Router();

const NewProj = require("./project-model.js");

router.get("/projects", (req, res) => {
  NewProj.getProjects()
    .then((proj) => {
      res.json(proj);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve any projects", err });
    });
});

router.get("/tasks", (req, res) => {
  NewProj.getTasks()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve any tasks", err });
    });
});

module.exports = router;
