const express = require('express');
const { pool } = require('../common/db');
const tierListView = express.Router();
const TierCount = 6;

tierListView.get('/', async (req, res) => {
    try {
        let sql =
            "SELECT *\n" +
            "FROM TierList_Items\n" +
            "WHERE tierListId = ?;"

        pool.getConnection((err, connection) => {
            if (err) throw err;

            connection.query(sql, [req.query.id], (err, result) => {
                if (err) throw err;

                let tiers = [];
                for (let i = 0; i < TierCount; i++) {
                    tiers[i] = []
                }

                result.forEach(rowData => {
                    tiers[rowData.voteSum === 0 ? 0 : Math.round(rowData.numVotes / rowData.voteSum)].push(rowData);
                });

                console.log(tiers);
                res.send(tiers);

                connection.release();
            });
        });

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

module.exports = tierListView;