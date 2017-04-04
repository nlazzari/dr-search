'use strict';

const Model = require('objection').Model;


class ModelBase  extends Model {
  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}


module.exports = ModelBase;
