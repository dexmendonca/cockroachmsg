import dotenvSafe from 'dotenv-safe';
dotenvSafe.config();

interface KnexConfig {
    [key: string]: any;
}

const knexConfig: KnexConfig = {
	development: {
		client: process.env.DEV_DATABASE_CLIENT,
		connection: {
			host: process.env.DEV_DATABASE_HOST,
			port: process.env.DEV_DATABASE_PORT,
			database: process.env.DEV_DATABASE_NAME,
			user: process.env.DEV_DATABASE_USER,
			password: process.env.DEV_DATABASE_PASSWORD
		},
		pool: {
			min: parseInt(process.env.DEV_DATABASE_POOL_MIN || '7'),
			max: parseInt(process.env.DEV_DATABASE_POOL_MAX || '70')
		}
	},
	staging: {
		client: process.env.STA_DATABASE_CLIENT,
		connection: {
			host: process.env.STA_DATABASE_HOST,
			port: process.env.STA_DATABASE_PORT,
			database: process.env.STA_DATABASE_NAME,
			user: process.env.STA_DATABASE_USER,
			password: process.env.STA_DATABASE_PASSWORD
		},
		pool: {
			min: parseInt(process.env.DEV_DATABASE_POOL_MIN || '7'),
			max: parseInt(process.env.DEV_DATABASE_POOL_MAX || '70')
		}
	},
	production: {
		client: process.env.PRD_DATABASE_CLIENT,
		connection: {
			host: process.env.PRD_DATABASE_HOST,
			port: process.env.PRD_DATABASE_PORT,
			database: process.env.PRD_DATABASE_NAME,
			user: process.env.PRD_DATABASE_USER,
			password: process.env.PRD_DATABASE_PASSWORD
		},
		pool: {
			min: parseInt(process.env.DEV_DATABASE_POOL_MIN || '7'),
			max: parseInt(process.env.DEV_DATABASE_POOL_MAX || '70')
		}
	}
};

export default knexConfig;
