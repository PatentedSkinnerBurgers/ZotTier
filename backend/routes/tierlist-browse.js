const express = require('express');
const { pool } = require('../common/db');
const listBrowseRouter = express.Router();

listBrowseRouter.get('/', async (req, res) => {
    try {
        let sql =
            "SELECT *, COUNT(*) as itemCount\n" +
            "FROM (\n" +
                "SELECT TierList.id, TierList.name, TierList.imageUrl, SUM(TL_Item.numVotes) as totalVotes\n" +
                "FROM TierList, TierList_Items TL_Item\n" +
                "WHERE TierList.id = TL_Item.tierListId\n" +
            ") as _";

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