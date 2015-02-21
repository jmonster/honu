'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.table('oncalls', function(t) {
    t.integer('provider_id')
     .unsigned()
     .references('id')
     .inTable('providers')
     .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('oncalls', function(t) {
    t.dropColumn('provider_id');
  });
};
