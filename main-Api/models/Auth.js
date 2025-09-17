const moongoose = require('mongoose');

const authSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number : {
        type: Number,
        required: true
    }
});

const Auth = moongoose.model('Auth', authSchema);
module.exports = {Auth};