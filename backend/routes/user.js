const express = require('express');
const { pool } = require('../common/db');
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    let sql = 'SELECT * FROM user';
 
    pool.getConnection((err, connection) => {
        if (err) throw err;
 
        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('user received by pool.');
 
            connection.release();
        });
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = userRouter;