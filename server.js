const express = require('express')
const next = require('next')
const routes = require('./routes')
const env = require('dotenv').config()

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express().use(handler).listen(3000)
})
