const moongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    try {
        await moongoose.connect(process.env.MONGO_URI)
        res.json({message: 'Database connected'}) 
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = {connectDB}