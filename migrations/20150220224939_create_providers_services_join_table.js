'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('providers_services', function(t) {
    t.integer('provider_id')
     .unsigned()
     .references('id')
     .inTable('providers')
     .notNullable();

    t.integer('service_id')
     .unsigned()
     .references('id')
     .inTable('services')
     .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('providers_services');
};
