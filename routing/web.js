const express = require('express')
const FrontController = require('../controlers/FrontController')
const AdminController = require('../controlers/admin/AdminController')
const route =express.Router()


route.get('/home',FrontController.home)
  route.get('/about',FrontController.about)
  route.get('/',FrontController.login)
  route.get('/register',FrontController.register)
  route.get('/contact',FrontController.contact)


  route.get('/admin/dashboard',AdminController.dashboard)
  route.get('/admin/studentDisplay',AdminController.displayStudent)


module.exports = route