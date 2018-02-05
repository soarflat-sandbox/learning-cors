const express = require('express');
const helmet = require('helmet');

const port = process.env.PORT || 5050;
const app = express();

app.use(helmet());

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