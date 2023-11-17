const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// IMPORT ROUTES
const user = require('./routes/user');
const tierlist_browse = require('./routes/tierlist-browse');
const tierlist_view = require("./routes/tierlist")

app.use(cors())

app.use('/user', user);
app.use('/tierlist-browse', tierlist_browse);
app.use('/tierlist', tierlist_view);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})