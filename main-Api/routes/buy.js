const express = require('express');
const {Cart} = require('../models/cart');
const router = express.Router();
const {auth} = require('../middleware/auth');

function calculateTotal(products) {
    return products.length * 100;
}

router.post('/buy/without-discount', auth, async (req, res) => {
    const {username} = req.body;
    const cart = await Cart.findOne({username});
    if (!cart) {
        return res.status(404).send('Cart not found');
    }
    const total = calculateTotal(cart.products);
    res.json({total});
});

router.post('/buy/with-discount', auth, async (req, res) => {
    const {username} = req.body;
    const cart = await Cart.findOne({username});
    if (!cart) {
        return res.status(404).send('Cart not found');
    }
    const total_before = calculateTotal(cart.products);
    const total_after = total_before -20;
    res.json({
        products: cart.products,
        total_before : `${total_before}`, 
        total_after : `${total_after}`
    });
})

module.exports = router