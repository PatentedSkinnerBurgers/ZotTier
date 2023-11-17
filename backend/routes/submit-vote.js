const express = require('express');
const { pool } = require('../common/db');
const submitVote = express.Router();

submitVote.post('/', async (req, res) => {
    try {
        let sql =
            "UPDATE TierList_Items\n" +
            "SET numVotes = numVotes + 1, voteSum = voteSum + ?\n" +
            "WHERE tierListId = ? AND name = ?;"

        pool.getConnection((err, connection) => {
            if (err) throw err;

            let postBody = req.body;
            let queryInputData = [postBody.rank, postBody.tierListId, postBody.itemName];
            connection.query(sql, queryInputData, (err, result) => {
                if (err) throw err;

                console.log(result.info);
                res.send("Data Posted!")

                connection.release();
            });
        });

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

module.exports = submitVote;