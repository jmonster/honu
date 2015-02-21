'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', function(t) {
    t.increments().primary();
    t.string('title').notNullable();
    t.integer('price');
    t.integer('duration_in_minutes').notNullable();
    t.integer('travel_limit_in_miles');
    t.specificType('service_starts_at', 'time(0) with time zone').notNullable();
    t.specificType('service_ends_at', 'time(0) with time zone').notNullable();
    t.date('first_day_offered').notNullable();
    t.date('last_day_offered');
    t.string('description').notNullable();
    t.boolean('disabled').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('services');
};
