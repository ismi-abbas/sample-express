import express from 'express'
import morgan from 'morgan'
import { expenseRouter } from './routes/expenseRoutes.js'
import { userRouter } from './routes/userRoutes.js'
import { db } from './db.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/expenses', expenseRouter)
app.use('/user', userRouter)

// Middleware to check for token
const checkToken = (req, res, next) => {
	const token = req.headers.authorization
	if (token) {
		if (token !== '1234') {
			res.status(403).json({ error: 'Invalid token' })
		}

		next()
	} else {
		return res.status(401).json({ error: 'Token required' })
	}
}
// app.use(checkToken)

// HTTP methods
app.get('/', (req, res) => {
	return res.send('tset')
})

app.post('/', async (req, res) => {
	console.log(req.body)
	const { body } = req
	return res.send('tset')
})

app.delete('/:id', (req, res) => {
	const { id } = req.params
	return res.send('tset')
})

app.put('/:id', (req, res) => {
	const { id } = req.params
	return res.send('tset')
})

app.listen(3000, () => {
	console.log('Listening on port 3000')
})
