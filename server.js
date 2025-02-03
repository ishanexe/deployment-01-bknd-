const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/form', require('./routes/form'));

connectToMongo()
  .then(() => {
      app.listen(port, () => {
          console.log(`Example app listening on port ${port}`);
      });
  })
  .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1);
  });
