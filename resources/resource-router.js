const express = require('express');

const NewSource = require("./resource-model.js");

const router = express.Router();

router.get("/resources", (req, res) => {
  NewSource.getResources()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve any resources", err });
    });
});

router.post("/resources", (req, res) => {
  NewSource.insertResources(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the resource",
      });
    });
});