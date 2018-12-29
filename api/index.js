import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)

// Workaround until https://github.com/nuxt/nuxt.js/pull/4656
export default app
