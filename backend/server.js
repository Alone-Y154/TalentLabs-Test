const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
const jwt = require('jsonwebtoken');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: ["https://talentlabs-test-web.netlify.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

app.post('/validate-token', (req, res) => {
    const token = req.body.token;
    // Verify the token using your secret key
    jwt.verify(token, process.env.JWT_SECRET_KEY , (err, decoded) => {
      if (err) {
        return res.status(401).send({ authorized: false });
      }
      return res.send({ authorized: true });
    });
  });
  

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

module.exports = app;
