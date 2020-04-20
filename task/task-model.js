const db = require('../data/db-config.js')

module.exports = {
  getTasks,
  insertTask
};

function getTasks() {
  return db("tasks").join("tasks", "tasks.project_id", "project.id")
  .select("projects.name", "projects.description");
}

function insertTask(task) {
  return db("tasks").insert(task);
}
