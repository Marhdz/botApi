/**
 * Citas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    sender: {
      model: 'usuario'
    },
    fecha: {
      type: "string",
      index: true,
      required: true
    },
    motivo: {
      type: "string"
    },
}};
