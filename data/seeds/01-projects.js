
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { projName: 'Rocket', description: 'model rocket'},
        { projName: 'Mud-Pit', description: 'Wrestling Pit full of mud'},
        { projName: 'Home-Gym', description: 'Place to get strong'}
      ]);
    });
};
