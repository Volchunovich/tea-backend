import { Knex } from 'knex';

import { POSTGRES_TABLE_NAMES } from '../src/infrastructure/database/postgres.constant';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .hasTable(POSTGRES_TABLE_NAMES.TEAS)
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable(
          POSTGRES_TABLE_NAMES.TEAS,
          async function (table) {
            table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));

            table.string('name').notNullable();
            table.string('type').notNullable();
            table.string('description').notNullable();
            table.integer('price').notNullable();
            table.integer('rating').notNullable();
            table.string('image').notNullable();

            table
              .timestamp('updated_at')
              .notNullable()
              .defaultTo(knex.fn.now());
            table
              .timestamp('created_at')
              .notNullable()
              .defaultTo(knex.fn.now());
          },
        );
      }
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .hasTable(POSTGRES_TABLE_NAMES.TEAS)
    .then(function (exists) {
      if (exists) {
        return knex.schema.dropTable(POSTGRES_TABLE_NAMES.TEAS);
      }
    });
}
