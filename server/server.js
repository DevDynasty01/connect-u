const express = require('express');
const pool = require('./pool').pool;
const cors = require('cors');

const PORT=8080;
const app = express(); 
const corsOptions = {origin:['http://localhost:3000'], optionsSuccessStatus : 200}

app.use(cors());
app.use(express.json());

// app.get('/employees', cors(corsOptions), async (req, res) => {
//     const [name] = await pool.query('SELECT * FROM usersdb')
//     res.send(name);
// })


app.get('/employerTask', cors(corsOptions), async (req, res) => {
    const [name] = await pool.query('SELECT * FROM tasks')
    res.send(name);
})



app.listen(PORT, () => {
    console.log(`Express web API running on port ${PORT}.`)
})