const cityList = require('./../data/cities');

// console.log(cityList);
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Cities').del()
    .then( () => {
      const citySeedData = [];
      for(let i=0; i < cityList.length; i++) {
        citySeedData.push({
          id: i+1,
          city: cityList[i],
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      return citySeedData;
    })
    .then( (citySeedData) => {
      // Inserts seed entries
      return knex.batchInsert('Cities', citySeedData,10);
    });
};
