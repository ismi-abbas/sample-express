import { Sequelize } from 'sequelize'

export const db = new Sequelize('hello_world_db', 'root', 'root', {
	host: 3600,
	dialect: 'mysql',
})
db.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.')
	})
	.catch(error => {
		console.error('Unable to connect to the database: ', error)
	})
