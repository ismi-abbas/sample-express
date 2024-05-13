import express from 'express'

export const expenseRouter = express.Router()

expenseRouter.get('/', (req, res) => {
	res.send('this is api routes')
})
