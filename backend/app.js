const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// IMPORT ROUTES
const user = require('./routes/user');

app.use(cors())

app.use('/user', user);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})