var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const MessageSchema = new mongoose.Schema({
    content: {
        type: String
    },
    //user who sent messages
    sentBy: {
        type: Number
    },

    _product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'

    },
    //logged in user
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true })

const Message = mongoose.model('Message', MessageSchema);