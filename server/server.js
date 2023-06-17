const express = require("express");
const pool = require("./PromisePool").promisePool;
const cors = require("cors");


const PORT = 8080;
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};


app.use(cors());
app.use(express.json());

// app.get('/employees', cors(corsOptions), async (req, res) => {
//     const [name] = await pool.query('SELECT * FROM usersdb')
//     res.send(name);
// })



//////////////////////////////////////////////////////////THIS WORKS DO NOT TOUCH
app.get("/tasks/:id", cors(corsOptions), async (req, res) => {
  const taskId = req.params["id"];
  const [result] = await pool.query(`SELECT * FROM tasks where id = ?`, [
    taskId,
  ]);
  const body = result[0];

  body ? res.send(body) : res.status(404).send({ message: "Task not found" });
});

/////////////////////////////////////////////////////////////////////////

app.get("/tasks/", cors(corsOptions), async (req, res) => {

  const [result] = await pool.query(`SELECT * FROM tasks`);
  const body = result;

  body ? res.send(body) : res.status(404).send({ message: "Task not found" });
});

// app.post('/employees', cors(corsOptions), async (req, res) => {
//     let { name, task } = req.body;
//     const [newTask] = await pool.execute('INSERT INTO users (task) VALUES (?) WHERE name = ?', [task, name])
//     res.send(newTask);
// })


app.listen(PORT, () => {
  console.log(`Express web API running on port ${PORT}.`);
});
