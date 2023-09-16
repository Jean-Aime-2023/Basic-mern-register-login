const express = require('express');
const dotenv = require('dotenv'); 
const cors = require('cors');
const app = express();
const mongoose = require('mongoose'); 
const cookieParser = require('cookie-parser')

// Load environment variables from .env
dotenv.config(); // Call dotenv.config() to load environment variables

// Database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database Connected'))
  .catch((err) => console.error('Database not connected', err));

//middleware
app.use(express.json())  
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/authRoutes'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));