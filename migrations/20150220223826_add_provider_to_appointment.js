'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.table('appointments', function(t) {
    t.integer('provider_id')  // belongsTo a `provider`
     .unsigned()
     .references('id')
     .inTable('providers')
     .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('appointments', function(t) {
    t.dropColumn('provider_id');
  });
};
