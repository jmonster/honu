'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('appointments', function(t) {
    t.datetime('begins_at').notNullable();
    t.datetime('ends_at').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appointments');
};
