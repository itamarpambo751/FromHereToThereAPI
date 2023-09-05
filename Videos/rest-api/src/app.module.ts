import { NextFunction, Request, Response } from "express"
import Routes from "./routes"

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use((req: Request, res: Response, next:NextFunction) => {
	app.use(cors({
		origin: '*',
		methods: "POST, GET, PATCH, DELETE",
		optionsSuccessStatus: 200
	}))

	next()
})
app.use(Routes)

export default app