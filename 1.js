const _ = require('lodash');
const a =  [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 2, 'y': 2 }];
const s = _.uniqWith(a, _.isEqual)
console.log(s)

const s1 = users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  console.log(_.takeRightWhile(s1, function(o) { return !o.active; }))