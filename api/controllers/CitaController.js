/**
 * CitaController
 *
 * @description :: Server-side logic for managing Citas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: (req, res) => {
			Cita
					.find()
					.populate('sender')
					.exec((err, cita) => {
							if(err){
									sails.log.debug(err);
									return res.serverError(err);
							}

							return res.json(cita);
					});
	},
	findOne: (req, res) => {
			const id = req.param('id');
			Cita
					.find( id )
					.populate( 'sender' )
					.exec((err, cita) => {
							if(err){
									sails.log.debug(err);
									return res.serverError(err);
							}

							return res.json(cita);
					});
	},
	create: (req, res) => {
			const params = req.allParams();
			Cita.create(params).exec((err, cita) => {
					if(err){
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(cita);
			});
	},
	update: (req, res) => {
			const id = req.param('id');
			const params = req.allParams();

			Cita.update(id, params).exec((err, cita) => {
					if(err){
							sails.log.debug(err);
							return res.serverError(err);
					}

					return res.json(cita);
			});
	},
	delete: (req, res) => {
			const id = req.param('id');
			Cita.destroy( id ).exec((err) => {
					if (err) {
							return res.negotiate(err);
					}
					sails.log('Cita deleted.');
					return res.ok();
			});
	}
};
