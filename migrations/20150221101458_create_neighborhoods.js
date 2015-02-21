'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('neighborhoods', function(t) {
    t.increments().primary();                                  // id
    t.string('name');
  });
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('neighborhoods');
};
