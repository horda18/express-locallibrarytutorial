var moment = require('moment');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', require: true }, //reference to the associated book
        imprint: { type: String, require: true },
        status: { type: String, required: true, enum: ['Disponible', 'Mantenimiento', 'Prestado', 'Reservado'], default: 'Mantenimiento' },
        due_back: { type: Date, default: Date.now }
    }
);

//Virtual for bookinstance's URL
BookInstanceSchema
    .virtual('url')
    .get(function () {
        return '/catalog/bookinstance/' + this._id
    });

BookInstanceSchema
    .virtual('due_back_formatted')
    .get(function () {
        return moment(this.due_back).format('MMMM Do, YYYY');
    });

BookInstanceSchema
    .virtual('due_back_yyyy_mm_dd')
    .get(function () {
        return moment(this.due_back).format('YYYY-MM-DD');
    });

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);