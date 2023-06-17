const cors = require('cors');
const express = require('express');
const promisePool = require('./PromisePool').pool;

// const PORT = 8080;
// const app = express();
// const corsOptions = {
// 	origin: ['http://localhost:3000'],
// 	optionsSuccessStatus: 200,
// };

// // Middleware...
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //TEST endpoint
// app.get('/testMessage', cors(corsOptions), async (req, res) => {
// 	res.send({ message: 'Hello From the BackEnd World' });
// });


// Adding user to sqldb
app.post('/employees', cors(corsOptions), async (req, res) => {
	//Destructuring req.body
	const { guid, username, name, email, position, role } = req.body;
	//Query to insert car on table
	await promisePool.query(
		`INSERT INTO employees (guid, username, name, email, position, role) VALUES (?,?,?,?,?,?)`,
		[guid, username, name, email, position, role]
	);
	
	
	res.send('user Added')

});

app.get('/employees/:guid', cors(corsOptions), async(req, res)=>{
	const userId = req.params['guid'];
	const [result] = await promisePool.query(
		`SELECT * FROM employees WHERE guid = ? `, [userId]
	);
	const body = result[0];
	console.log(result)

	body ? res.send(body) : res.status(404).send({ message: 'User Not Found.' });
})





app.listen(PORT, () => {
	console.log(`Express web API running on port: ${PORT}.`);
});
