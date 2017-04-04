const langList = require('./../data/languages');

// console.log(cityList);
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Languages').del()
    .then( () => {
      const langSeedData = [];
      for(let i=0; i < langList.length; i++) {
        langSeedData.push({
          id: i+1,
          language: langList[i],
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      return langSeedData;
    })
    .then( (langSeedData) => {
      // Inserts seed entries
      return knex.batchInsert('Languages', langSeedData,10);
    });
};
