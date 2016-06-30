'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Category = mongoose.model('Category');

/**
 * Globals
 */

var user, category;

/**
 * Unit tests
 */
// describe('Category Model Unit Tests:', function() {
describe('Category Model', function() {

	describe('Saving', function() {

		it('saves new record', function(done) {
			var category = new Category({
				name: 'Beverages',
				description: 'Soft drinks, coffees, teas, beers and ales'
			});

			category.save(function(err, saved) {
				should.not.exist(err);
				done();
			});
		});

		it('throws validation error when name is empty', function(done) {
			var category = new Category({
				description: 'Soft drinks, coffees, teas, beers and ales'
			});

			category.save(function(err) {
				should.exist(err);
				err.errors.name.message.should.equal('name cannot be blank');
				done();
			});
		});

		it('throws validation error when name is longer than 15 characters', function(done) {
			var category = new Category({
				name: 'Grains/Cereals/Chocolates'
			});

			category.save(function)
		});

		it('throws validation error for duplicate category name');

	});

	// beforeEach(function(done) {
	// 	user = new User({
	// 		firstName: 'Full',
	// 		lastName: 'Name',
	// 		displayName: 'Full Name',
	// 		email: 'test@test.com',
	// 		username: 'username',
	// 		password: 'password'
	// 	});
	//
	// 	user.save(function() {
	// 		category = new Category({
	// 			// Add model fields
	// 			// ...
	// 		});
	//
	// 		done();
	// 	});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return category.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		Category.remove().exec();
		User.remove().exec();

		done();
	});
});
