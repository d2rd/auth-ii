
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bands').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {bandName: 'Calculated Risk',bandInitials: 'CR',musicianCount: 7,genre: 'Jazz, Funk, World'},
        {bandName: 'Bobby Young Project',bandInitials: 'BYP',musicianCount: 6,genre: 'Blues, Funk'},
        {bandName: 'Robert Stewart Experience',bandInitials: 'RS',musicianCount: 4,genre: 'Jazz, Funk'},
        {bandName: 'Retroz',bandInitials: 'Rz',musicianCount: 5,genre: 'Easy Listening, Jazz, Oldies, Motown'},
      ]);
    });
};
