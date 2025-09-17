const expess = require('express');
const {Cart} = require('../models/cart');
const router = expess.Router();
const {checkout} = require('../middleware/checkout');

router.post('/addcart', checkout, async (req, res) => {
    const {username, products} = req.body;
    let cart = await Cart.findOne({username});
    if (cart) {
        return res.send(cart);
    }
    else if(!cart) {
        cart = new Cart({username, products});
        cart.products.push(products)
        await cart.save();
        return res.send(cart);
    }
});

router.delete('/deletecart', checkout, async (req, res) => {
    const {username} = req.body;
    let cart =await Cart.findOne({username});
    if (!cart){
        return res.status(404).send('Cart not found');
    }
    cart.products = await Cart.products.filter(product => product.username !== username);
    await cart.save();
    res.json({message: `${products} deleted successfully`});
});

module.exports = router;

