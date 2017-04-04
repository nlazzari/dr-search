'use strict';

const Model               = require('objection').Model;
const ModelBase           = require('./ModelBase');
const DoctorContact       = require('./DoctorContact');
const RateMyMDRating      = require('./RateMyMDRating');

class Doctor extends ModelBase {
  // Table name is the only required property.
  static get tableName() {
    return 'Doctors';
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['firstName', 'lastName'],

      properties: {
        id: {type: 'integer'},
        firstName: {type: 'string', minLength: 1, maxLength: 255},
        middleName: {type: 'string'},
        lastName: {type: 'string', minLength: 1, maxLength: 255},
        gender: {type: 'string', minLength: 1, maxLength: 255},
        languages: {type: 'string'},
        createdAt: {type: 'string'},
        updatedAt: {type: 'string'}
      }
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      contactInfo: {
        relation: Model.HasManyRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: __dirname + '/DoctorContact',
        join: {
          from: 'Doctors.id',
          to: 'DoctorContacts.DoctorId'
        }
      },

      rateMyMDRating: {
        relation: Model.HasManyRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: __dirname + '/RateMyMDRating',
        join: {
          from: 'Doctors.id',
          to: 'RateMyMDRatings.DoctorId'
        }
      }

    };
  }
}

module.exports = Doctor;
