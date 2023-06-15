const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1992',
  database: 'employee',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/usersdb', (req, res) => {
  const query = 'SELECT * FROM your_table';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
