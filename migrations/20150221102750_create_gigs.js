'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('gigs', function(t) {                               // id
  	t.integer('service_id')
     .unsigned()
     .references('id')
     .inTable('services')
     .notNullable();

    t.integer('provider_id')
     .unsigned()
     .references('id')
     .inTable('providers')
     .notNullable();

   t.integer('neighborhood_id')
     .unsigned()
     .references('id')
     .inTable('neighborhoods')
     .notNullable();
  });
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('gigs');
};
