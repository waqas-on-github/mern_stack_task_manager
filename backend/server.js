// import npm packages
import 'dotenv/config.js'
import './config/db.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'


// import routers
import { router as indexRouter } from './routes/index.js'
import { router as usersRouter } from './routes/users.js'
import { router as todoRouter  } from './routes/todorouter.js'

// create the express app
const app = express()


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.use(MethodOverride('_method'))
// mount imported routes
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/todos' , todoRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler

app.use(function (err, req, res, next) {
  if(err instanceof(CustomError)) {
    // do acc to custom error 
    res.static(err.code || 500).json({
      sucess:  false,
      error : err.message
    })
  }
 if(err) {
  res.status(err.code || 500).json({
    sucess:  false,
    error : err.message
  })
 }

})

export { app }
