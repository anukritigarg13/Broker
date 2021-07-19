const express = require('express');
const env = require('dotenv');

const { healthRouter } = require('./routes');

env.config();
const port = process.env.PORT || 8081;
const app = express();

app.use(express.json());

app.use('/health', healthRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
