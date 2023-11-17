const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// IMPORT ROUTES
const tierlist_browse = require('./routes/tierlist-browse');
const tierlist_view = require("./routes/tierlist")
const submit_vote = require('./routes/submit-vote');

app.use(cors())
app.use(express.json());

app.use('/tierlist-browse', tierlist_browse);
app.use('/tierlist', tierlist_view);
app.use('/submit-vote', submit_vote);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})