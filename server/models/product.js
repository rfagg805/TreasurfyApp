var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        minlength: 4,

    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
    },
    images: {
        type: String,
        required: [true, 'Image is required.'],
        default: 0,
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minlength: 4,
    },
    condition: {
        type: String,
        required: [true, 'Condition is required.'],
    },
    catalog: {
        type: String,
        required: [true, 'Catalog is required.'],
    },
    url: {
        type: String,
        minlength: 1,
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema);