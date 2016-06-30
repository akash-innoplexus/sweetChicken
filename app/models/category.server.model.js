'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	  Schema = mongoose.Schema;

/**
 * Validation
 */

function validateLength (v) {
	// a customn validation function for checking string length to be used by the model
	return v.length <= 15;
}


/**
 * Category Schema
 */

var CategorySchema = new Schema({
	// Category model fields
	// ...   (we will add properties here soon....)

	//the property name
	created: {
		// types are defined e.g. Date, string, number (http://mongoosejs.com/docs/guide.html)
		type: Date,
		// default values can be set
		default: Date.now
	},
	description: {
		type: string,
		default: '',
		// types have specific function example trim, lowercase and uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
		trim: true
	},
	name: {
		type: String,
		default: '',
		trim: true,
		unique: true,
		//make this a required fields
		required: 'name cannot can be blank'
		//wires in custom validator function (http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate).
		validate: [validateLength, 'name must be 15 characters in length or less']
	}

});



// add the model name and schema to the mongose model
//Expose the model to other subjects(similar to a 'public' setter).
mongoose.model('Category', CategorySchema);
