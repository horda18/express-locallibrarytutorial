var moment = require('moment'); // For date handling.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name: { type: String, required: true, max: 100 },
        family_name: { type: String, required: true, max: 100 },
        date_of_birth: { type: Date },
        date_of_death: { type: Date },
    }
);

//Virtual for author's full name
AuthorSchema
    .virtual('name')
    .get(function () {

        //to avoid errors in cases where an author does not have either a family name or firstname
        //we want to make sure we handle the exception by returning and empty string for that case 

        var fullname = '';
        if (this.first_name && this.family_name) {
            fullname = this.family_name + ', ' + this.first_name;
        }
        if (!this.first_name || !this.family_name) {
            fullname = '';
        }
        return fullname;
    });

// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
    var lifetime_string = '';
    if (this.date_of_birth) {
        lifetime_string = moment(this.date_of_birth).format('MMMM Do, YYYY');
    }
    lifetime_string += ' - ';
    if (this.date_of_death) {
        lifetime_string += moment(this.date_of_death).format('MMMM Do, YYYY');
    }
    return lifetime_string;
});

AuthorSchema
.virtual('date_of_birth_yyyy_mm_dd')
.get(function () {
    return moment(this.date_of_birth).format('YYYY-MM-DD');
});

AuthorSchema
.virtual('date_of_death_yyyy_mm_dd')
.get(function () {
    return moment(this.date_of_death).format('YYYY-MM-DD');
});


// Virtual for author's URL

AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);