import type { Knex } from "knex";


export async function up(knex: Knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').nullable();
    table.integer('author').unsigned().notNullable()
      .references('id').inTable('users').onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tasks');
}