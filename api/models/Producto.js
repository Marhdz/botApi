/**
 * Producto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   attributes: {
     nombre: {
       type: "string",
       required: true
     },
     precio: {
       type: "number",
       required: true
     },
     descripcion: {
       type: "string",
     },
     imagen: {
       type: "string"
     }
   },
   connection: 'devMongodb'
 };
