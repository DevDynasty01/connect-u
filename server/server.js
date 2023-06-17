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

app.get('/employees', cors(corsOptions), async (req, res) => {
    const [name] = await pool.query('SELECT * FROM employees')
    res.send(name);
})

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



app.post('/tasks/', cors(corsOptions), async (req, res) => {
  let { guid, task, status, due_date, date_assigned} = req.body; 
  const [newTask] = await pool.execute('INSERT INTO tasks (guid, task, status, due_date, date_assigned) values (?, ?, ?, ?, ?)', [guid, task, status, due_date, date_assigned])

res.send(newTask);
});


// Adding user to sqldb
app.post('/employees', cors(corsOptions), async (req, res) => {
	//Destructuring req.body
	const { guid, username, name, email, position, role } = req.body;
	//Query to insert car on table
	await pool.query(
		`INSERT INTO employees (guid, username, name, email, position, role) VALUES (?,?,?,?,?,?)`,
		[guid, username, name, email, position, role]
	);
	
	
	res.send('user Added')

});

app.get('/employees/:guid', cors(corsOptions), async(req, res)=>{
	const userId = req.params['guid'];
	const [result] = await pool.query(
		`SELECT * FROM employees WHERE guid = ? `, [userId]
	);
	const body = result[0];
	console.log(result)

	body ? res.send(body) : res.status(404).send({ message: 'User Not Found.' });
})




app.listen(PORT, () => {
  console.log(`Express web API running on port ${PORT}.`);
});
