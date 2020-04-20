const express = require("express");

const NewTask = require("./task-model.js");

const router = express.Router();



router.get("/tasks", (req, res) => {
  NewTask.getTasks()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve any tasks", err });
    });
});

router.post("/tasks", (req, res) => {
  NewTask.insertTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the task",
      });
    });
});