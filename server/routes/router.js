const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
const authenticationController = require('../controller/authenticationController');
const {isAuthenticated} = require('../services/authenticate');

/**
 * @description Root Route
 * @method GET/
 */
// get render login page
route.get('/login',services.loginRoutes);
// get render home page
route.get('/',isAuthenticated, services.homeRoutes);
// get render signup page
route.get('/signup',services.signupRoutes);
// get render view page
route.get('/view/',isAuthenticated,services.viewRoutes);
route.get('/logout',authenticationController.logout)

// Authentication
// signup
route.post('/signup', authenticationController.signup);
// login
route.post('/login', authenticationController.login);


// API
route.post('/api/employees', controller.create);
route.get('/api/employees', controller.find);
route.put('/api/employees/:id', controller.update);
route.delete('/api/employees/:id', controller.delete);

// Search 
route.get('/api/employees/search', controller.search);

module.exports = route;