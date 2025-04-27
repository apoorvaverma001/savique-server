const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//loading env variables
dotenv.config();

//connetcing to mongodb
connectDB();

//initailize app
const app = express();

//start sever
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 💛`)
})