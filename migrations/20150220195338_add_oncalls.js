'use strict';

exports.up = function(knex, Promise) {
  var createOnCalls = knex.schema.createTable('oncalls', function(t) {
    t.increments().primary();                                  // id
    t.date('first_date_active').notNullable();                 // when this schedule starts to apply
    t.date('last_date_active');                                // when this schedule no longer applies
    t.specificType('active_on_days', 'bit(7)').notNullable();  // bit mask of which days
    t.specificType('begins_at_time', 'time(0)').notNullable(); // time of day to start working
    t.specificType('ends_at_time',   'time(0)').notNullable(); // time of day to stop working
    t.timestamps();                                            // created_at, updated_at
    t.integer('provider_id')                                   // belongsTo a `provider`
     .unsigned()
     .references('id')
     .inTable('providers')
     .notNullable();
  });

  var createProviders = knex.schema.createTable('providers', function(t) {
    t.increments().primary();
    t.string('first_name');
    t.string('last_name');
    t.string('email');
    t.string('phone_number');
    t.string('photo');
    t.string('bio');
    t.integer('rating');
    t.integer('number_of_ratings');
    // appointments
    // services
  });


  return Promise.all([createOnCalls, createProviders]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('oncalls'),
    knex.schema.dropTable('providers')
  ]);
};
