const express = require('express');
const pool = require('./pool').pool;
const cors = require('cors');



const PORT=8080;
const app = express(); 
const corsOptions = {origin:['http://localhost:3000'], optionsSuccessStatus : 200}

app.use(cors());
app.use(express.json());

app.get('/employees', cors(corsOptions), async (req, res) => {
    const [name] = await pool.query('SELECT * FROM users')
    res.send(name);
})

// app.post('/employees', cors(corsOptions), async (req, res) => {
//     let { name, task } = req.body; 
//     const [newTask] = await pool.execute('INSERT INTO users (task) VALUES (?) WHERE name = ?', [task, name])
//     res.send(newTask);
// })

app.listen(PORT, () => {
    console.log(`Express web API running on port ${PORT}.`)
})