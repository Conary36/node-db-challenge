const db = require("../data/db-config");

module.exports = {
  getProjects,
  getById,
  insertProject
};

function getProjects() {
  return db("projects");
}
function getById(id){
    return db('projects')
        .where({id})
        .first();
}
function insertProject(proj) {
  return db("projects").insert(proj);
}



