const cors = require('cors');
const express = require('express');
const promisePool = require('./PromisePool').pool;

const PORT = 8080;
const app = express();
const corsOptions = {
	origin: ['http://localhost:3000'],
	optionsSuccessStatus: 200,
};

// Middleware...
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TEST endpoint
app.get('/testMessage', cors(corsOptions), async (req, res) => {
	res.send({ message: 'Hello From the BackEnd World' });
});


//First TEST remote connection
// app.get('/cars/:id', cors(corsOptions), async (req, res) => {
// 	const carId = req.params['id'];
// 	const [result] = await promisePool.query(
// 		`SELECT * FROM car WHERE car_id = ? `,
// 		[carId]
// 	);
// 	const body = result[0];
// 	console.log(result)

// 	body ? res.send(body) : res.status(404).send({ message: 'Car Not Found.' });
// });

// Adding user to sqldb
app.post('/users', cors(corsOptions), async (req, res) => {
	//Destructuring req.body
	const { email, guid, role } = req.body;
	//Query to insert car on table
	await promisePool.query(
		`INSERT INTO usersdb (email, guid, role) VALUES (?,?, ?)`,
		[email, guid, role]
	);
	
	
	res.send('user Added')

});




app.listen(PORT, () => {
	console.log(`Express web API running on port: ${PORT}.`);
});
