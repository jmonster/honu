'use strict';

exports.seed = function(knex, Promise) {
  return Promise.all([
      knex('providers').insert({
        first_name: 'johnny',
        last_name: 'domino',
        email: 'johnny@yayuhh.com',
        phone_number: '+1.407.536.6466',
        photo: 'http://some.where/foo.png',
        bio: 'i yell ya h\'what',
        rating: 499,
        number_of_ratings: 3204
      }),

      knex('providers').insert({
        first_name: 'tupac',
        last_name: 'kapoor',
        email: 'ameesh@poop.com',
        phone_number: '+1.555.123.4567',
        photo: 'http://some.where/foo.png',
        bio: 'i yell ya h\'what',
        rating: 325,
        number_of_ratings: 7
      }),

      knex('providers').insert({
        first_name: 'brown',
        last_name: 'bear',
        email: 'brown@bears.com',
        phone_number: '+1.938.2212',
        photo: 'http://some.where/foo.png',
        bio: 'i yell ya h\'what',
        rating: 125,
        number_of_ratings: 2
      })
    ]);
};
