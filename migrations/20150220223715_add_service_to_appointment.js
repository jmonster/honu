'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.table('appointments', function(t) {
    t.integer('service_id')   // belongsTo a `service`
     .unsigned()
     .references('id')
     .inTable('services')
     .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('appointments', function(t) {
    t.dropColumn('service_id');
  });
};
