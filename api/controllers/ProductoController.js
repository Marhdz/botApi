/**
 * ProductoController
 *
 * @description :: Server-side logic for managing Productoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	list:function(req, res){
 			Producto.find({}).exec(function(err, productos){
 					if(err){
 							res.send(500, {error: 'Database Error'});
 					}
 					res.json(productos);
 					// productos.forEach(function(producto){console.log(producto.nombre)});
 			});
 		}

 };
