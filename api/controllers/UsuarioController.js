/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: (req, res) => {

			Usuario.find().exec((err, users) => {

					if (err) {
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(users);
			});
	},
	findOne: (req, res) => {
			const id = req.param('id');

			Usuario.find( id ).exec((err, users) => {

					if (err) {
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(users);
			});
	},
	create: (req, res) => {
			const params = req.allParams();
			Usuario.create(params).exec((err, user) => {
					if(err){
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(user);
			});
	},
	update: (req, res) => {
			const id = req.param('id');
			const params = req.allParams();
			Usuario.update( id, params ).exec((err, user) => {
					if (err) {
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(user);
			});
	},
};
