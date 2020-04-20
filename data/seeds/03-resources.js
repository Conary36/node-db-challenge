
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { type: 'aluminum and schematics', description: 'shiny red rocket ship'},
        { type: 'stone walls', description: 'round in shape'},
        { type: 'How to build home gym manual', description: 'make it your own'}
      ]);
    });
};
