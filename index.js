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

//Middlewares
app.use(cors());
app.use(express.json()); //parse json body




//routes
app.use('/api/auth', require('./routes/authRoutes'));


//base rotue
app.get('/', (req, res) => {
    res.send('API is running.....');
});


const transactionRoutes = require('./routes/transaction.route');
app.use('/api/transactions', transactionRoutes);

//start sever
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 💛`)
})
