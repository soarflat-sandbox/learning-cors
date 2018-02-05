const express = require('express');
const helmet = require('helmet');

const port = process.env.PORT || 5000;
const app = express();

app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  next();
});

app.get('/', (req, res) => {
  res.json({
    "member": [{
      "name": "soarflat"
    }, {
      "name": "JohnDoe"
    }]
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});