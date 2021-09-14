const { json } = require('express');
const express = require('express');
const app = express();
const routers = require('./routers/entregas.routers');
require('dotenv').config();

app.use(express.urlencoded( { extended: false } ));
app.use(express.json());

app.use('/api/v1', routers);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));