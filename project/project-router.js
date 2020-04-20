const express = require("express");

const NewProj = require("./project-model.js");

const router = express.Router();



router.get("/projects", (req, res) => {
  NewProj.getProjects()
    .then((proj) => {
      res.json(proj);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve any projects", err });
    });
});



router.get('/:id', (req, res) => {
    NewProj.findById(req.params.id)
        .then(item => {
            if(item){
                res.status(200).json(item)
            }else{
                res.status(404).json({message: 'Project not found'})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the Project'
            });
        });

})

router.post("/projects", (req, res) => {
  NewProj.insertProject(req.body)
    .then((proj) => {
      res.status(201).json(proj);
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the project",
      });
    });
});



module.exports = router;
