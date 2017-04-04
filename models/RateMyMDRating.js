'use strict';

const Model       = require('objection').Model;
const ModelBase   = require('./ModelBase');
const Doctor      = require('./Doctor');


class RateMyMDRating extends ModelBase {
  // Table name is the only required property.
  static get tableName() {
    return 'RateMyMDRatings';
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['DoctorId', 'starRating'],

      properties: {
        id: {type: 'integer'},
        DoctorId: {type: 'integer'},
        starRating: {type: 'number'},
        profileLink: {type: 'string', minLength: 1, maxLength: 255},
        searchLink: {type: 'string', minLength: 1, maxLength: 255},
        resultsCount: {type: 'integer'},
        createdAt: {type: 'string'},
        updatedAt: {type: 'string'}
      }
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      doctor: {
        relation: Model.BelongsToOneRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: __dirname + '/Doctor',
        join: {
          from: 'RateMyMDRatings.DoctorId',
          to: 'Doctors.id'
        }
      }

    };
  }
}

module.exports = RateMyMDRating;
