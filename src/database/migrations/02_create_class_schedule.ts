import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable(); // day of week
        table.integer('from').notNullable(); // start day time
        table.integer('to').notNullable(); // finish day time
        
        // Create relation with classes
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}