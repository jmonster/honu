'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('providers', function(t) {
    t.increments().primary();
    t.string('first_name');
    t.string('last_name');
    t.string('email');
    t.string('phone_number');
    t.string('photo');
    t.string('bio');
    t.integer('rating');
    t.integer('number_of_ratings');

    // hasAndBelongstoMany: appointments
    // hasAndBelongstoMany: services
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('providers');
};
