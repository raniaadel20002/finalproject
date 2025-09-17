const express = require('express');
const cors = require('cors');
const {connectDB} = require('./config/connDB');


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/',require('./routes/shoppingcart'));
app.use('/buy',require('./routes/buy'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});