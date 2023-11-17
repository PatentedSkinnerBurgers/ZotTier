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

            for (let i = 0; i < req.body.length; i++) {
                let reqBody = req.body[i];

                connection.query(sql, [reqBody.rank, reqBody.tierListId, reqBody.itemName], (err, result) => {
                    if (err) throw err;

                    console.log(result.info);
                });
            }

            res.send("Data Posted!");
            connection.release();
        });

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

module.exports = submitVote;