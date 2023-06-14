const cors = require('cors');
const express = require('express');


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

app.listen(PORT, () => {
	console.log(`Express web API running on port: ${PORT}.`);
});
