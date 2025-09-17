const moongoose = require('mongoose');

const cartSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
});

const Cart = moongoose.model('Cart', cartSchema);
module.exports = {Cart};