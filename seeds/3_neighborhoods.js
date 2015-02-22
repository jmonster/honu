'use strict';

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('neighborhoods').insert({name: 'shadyside'}),
    knex('neighborhoods').insert({name: 'point breeze'}),
    knex('neighborhoods').insert({name: 'lawrenceville'})
  ]);
};
