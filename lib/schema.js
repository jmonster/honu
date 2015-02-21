// var days = {
//   monday:    Math.pow(2,0),
//   tuesday:   Math.pow(2,1),
//   wednesday: Math.pow(2,2),
//   thursday:  Math.pow(2,3),
//   friday:    Math.pow(2,4),
//   saturday:  Math.pow(2,5),
//   sunday:    Math.pow(2,6)
// }

// var days = {
//   monday:    '0000001',
//   tuesday:   '0000010',
//   wednesday: '0000100',
//   thursday:  '0001000',
//   friday:    '0010000,
//   saturday:  '0100000',
//   sunday:    '1000000'
// }

var Schema = {
  oncalls: {
    id: { type: 'increments', nullable: false, primary: true },
    name: { type: 'string', maxlength: 150, nullable: false },
    firstDateActive: { type: 'date', nullable: false },
    lastDateActive: { type: 'date', nullable: true },
    // beginsAtTime: { type: 'time(0) without time zone', nullable: false },
    // endsAtTime: { type: 'time(0) without time zone', nullable: false },
    // activeOnDays: { type: 'bit(7)', nullable: false }
  },
  // users: {
  //   id:    { type: 'increments', nullable: false, primary: true },
  //   email: { type: 'string', maxlength: 254, nullable: false, unique: true },
  //   name:  { type: 'string', maxlength: 150, nullable: false }
  // },
  // categories: {
  //   id: {type: 'increments', nullable: false, primary: true},
  //   name: {type: 'string', maxlength: 150, nullable: false}
  // },
  // posts: {
  //   id: {type: 'increments', nullable: false, primary: true},
  //   user_id: {type: 'integer', nullable: false, unsigned: true},
  //   category_id: {type: 'integer', nullable: false, unsigned: true},
  //   title: {type: 'string', maxlength: 150, nullable: false},
  //   slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
  //   html: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: false},
  //   created_at: {type: 'dateTime', nullable: false},
  //   updated_at: {type: 'dateTime', nullable: true}
  // },
  // tags: {
  //   id: {type: 'increments', nullable: false, primary: true},
  //   slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
  //   name: {type: 'string', maxlength: 150, nullable: false}
  // },
  // posts_tags: {
  //   id: {type: 'increments', nullable: false, primary: true},
  //   post_id: {type: 'integer', nullable: false, unsigned: true},
  //   tag_id: {type: 'integer', nullable: false, unsigned: true}
  // }
};

module.exports = Schema;
