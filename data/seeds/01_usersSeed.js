const bcrypt = require ('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()  // truncate allows reuse of primary keys from 1
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'd2rd', password: bcrypt.hashSync('pass123', 16), department:'bass', bandInitials:'CR'},
        {username: 'gddaniel', password: bcrypt.hashSync('pass123', 16), department:'bass'},
        {username: 'davidD', password: bcrypt.hashSync('pass123', 16), department:'bass'},
        {username: 'darlene', password: bcrypt.hashSync('pass123', 16), department:'vocals', bandInitials:'CR'},
        {username: 'glen', password: bcrypt.hashSync('pass123', 16), department:'piano', bandInitials:'CR'},
        {username: 'janice', password: bcrypt.hashSync('pass123', 16), department:'keys', bandInitials:'CR'},
        {username: 'omar', password: bcrypt.hashSync('pass123', 16), department:'drums', bandInitials:'RS'},
        {username: 'robert', password: bcrypt.hashSync('pass123', 16), department:'sax', bandInitials:'RS'},
        {username: 'vince', password: bcrypt.hashSync('pass123', 16), department:'sax', bandInitials:'CR'},
        {username: 'bobby', password: bcrypt.hashSync('pass123', 16), department:'guitar', bandInitials:'BYP'},
        {username: 'tony', password: bcrypt.hashSync('pass123', 16), department:'guitar', bandInitials:'CR'},
        {username: 'michael', password: bcrypt.hashSync('pass123', 16), department:'guitar'},
        {username: 'rob', password: bcrypt.hashSync('pass123', 16), department:'drums', bandInitials:'CR'},
        {username: 'latross', password: bcrypt.hashSync('pass123', 16), department:'drums', bandInitials:'BYP'}
      ]);
    });
};
