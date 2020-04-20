
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl=>{
        tbl.increments('id')
        tbl.text('projName', 128)
            .unique()
            .notNullable()
        tbl.varchar('description', 255)
            .nullable()
            .unique()
    })
    .createTable('tasks', tbl =>{
        tbl.increments('id')
        tbl.varchar('description', 255)
            .notNullable()
            .unique()
        tbl.text('notes', 128)
            .nullable()
            .unique()
    })
    .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.text('type', 128)
            .notNullable()
            .unique()
        tbl.varchar('description', 255)
            .nullable()
            .unique()
    })
    .createTable('project_resources', tbl =>{
        tbl.increments()
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('project_tasks', tbl => {
        tbl.increments()
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('tasks_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tasks')
            .onUpdate('CASCADE')
            .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
