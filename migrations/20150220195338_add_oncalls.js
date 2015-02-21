'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('oncalls', function(t) {
    t.increments().primary();                                  // id
    t.date('first_date_active').notNullable();                 // when this schedule starts to apply
    t.date('last_date_active');                                // when this schedule no longer applies
    t.specificType('active_on_days', 'bit(7)').notNullable();  // bit mask of which days
    t.specificType('begins_at_time', 'time(0) with time zone').notNullable(); // time of day to start working
    t.specificType('ends_at_time',   'time(0) with time zone').notNullable(); // time of day to stop working
    t.timestamps();                                            // created_at, updated_at
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('oncalls');
};
