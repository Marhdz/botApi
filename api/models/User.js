/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      fbId: {
        type: "string",
        required: true,
        unique: true,
        index: true
      },
      first_name: {
        type: "string",
        required: true
      },
      last_name: {
        type: "string",
        required: true
      },
      profile_pic: {
        type: "string",
        required: true
      },
      timezone: {
        type: "integer"
      },
      gender: {
        type: "string"
      },
  }
};
