'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.table('oncalls', function(t) {
    t.integer('neighborhood_id')   // belongsTo a `service`
     .unsigned()
     .references('id')
     .inTable('neighborhoods')
     .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('oncalls', function(t) {
    t.dropColumn('neighborhood_id');
  });
};
