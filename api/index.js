const express = require('express')
const postRoutes = require('./routes/posts');
const cors = require('cors')

require('dotenv').config();
const PORT = process.env.PORT || 5050;

const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.status(200).send('API is ready');
});

app.use('/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});