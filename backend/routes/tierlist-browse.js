const express = require('express');
const { pool } = require('../common/db');
const listBrowseRouter = express.Router();

listBrowseRouter.get('/', async (req, res) => {
    try {
        let sql =
            "SELECT id, TL.name, TL.imageUrl, CAST(SUM(numVotes) AS SIGNED) as totalVotes, COUNT(id) as itemCount\n" +
            "FROM TierList TL\n" +
                "INNER JOIN TierList_Items TLI on TL.id = TLI.tierListId\n" +
            "GROUP BY TL.id, TL.name;"

        pool.getConnection((err, connection) => {
            if (err) throw err;

            connection.query(sql, (err, result) => {
                if (err) throw err;

                res.send(result);

                connection.release();
            });
        });

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

module.exports = listBrowseRouter;