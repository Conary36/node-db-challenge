
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: '6 foot tall metal rocket', notes: 'Requires jet fuel'},
        { description: '10 foot deep', notes: '20 bags of soil to mix mud'},
        { description: '12 ft by 12 ft', notes: 'Max of 500lbs on weight rack '}
      ]);
    });
};
