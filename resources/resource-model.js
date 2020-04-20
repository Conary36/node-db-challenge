const db = require("../data/db-config");

module.exports = {
    getResources,
    insertResources
}

function getResources(task_id) {
  return db("resources").where({ task_id });
}

function insertResources(resource){
  return db('resources').insert(resource);
}
