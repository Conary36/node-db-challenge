const db = require("../data/db-config");

module.exports = {
  getProjects,
  insertProject,
  getTasks,
  insertTask,
  getResources,
};

function getProjects() {
  return db("projects");
}

function insertProject(proj) {
  return db("projects").insert(proj);
}

function getTasks() {
  return db("tasks")
    .join("tasks", "tasks.project_id", "project.id")
    //.select("posts.post_title", "posts.post_content", "users.username");
}

function insertTask(task) {
  return db("tasks").insert(task);
}

function getResources(task_id) {
  return db("resources").where({ task_id });
}
