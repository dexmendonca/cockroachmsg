import dotenvSafe from 'dotenv-safe';
import fastify from 'fastify';

dotenvSafe.config();
const server = fastify();

server.get('/', async (req, res) => {
	res.send({});
});

server.listen(3333, '0.0.0.0', (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
