import express from "express";

// Express Middle-Ware Modules
var session = require("express-session");

import React from "react";
import Router from "react-router";
import routes from "../shared/routes";

const app = express();

// set up Jade
// Folder containing HTML templates
app.set('views', './view/');
app.set('view engine', 'jade');

// Server Modules
var basement = require('./level-0/basement');
var bedroom = require('./level-0/bedroom');
var den = require('./level-0/den');
var diningRoom = require('./level-0/diningRoom');
var kitchen = require('./level-0/kitchen');
var upstairs = require('./level-0/upstairs');

var resources = require('resources');

// Server Modules
//var User = require('./User');

// Setting up public directory
app.use(express.static(__dirname + resources.RELATIVE_PUBLIC_DIR));

// Set up Session variable handling
app.use(session({	secret: 'test session',
					resave: false,
					saveUninitialized: true}));

//----------------------------------------------------------------------------------------------------------------------
// Index
//----------------------------------------------------------------------------------------------------------------------
app.get('/', function(req, res)
{
	var urlData = req.query;
	var session = req.session;
	var userData = {};

	Router.run(routes, req.url, Handler => {

		// Client-side variables.
		var props = {userData: userData};

		let content = React.renderToString(<Handler userData={userData}/>);
		res.render('index', {	content: content,
								props: JSON.stringify(props),
								title: "Kafka Alpha"});
	});
});

//----------------------------------------------------------------------------------------------------------------------
// User Pages
//----------------------------------------------------------------------------------------------------------------------
basement(app, Router, routes, React);
bedroom(app, Router, routes, React);
den(app, Router, routes, React);
diningRoom(app, Router, routes, React);
kitchen(app, Router, routes, React);
upstairs(app, Router, routes, React);

// Redirect to Index Page on linking to a page which does not exist.
/*app.use(function(req, res, next)
{
	res.redirect("/");
});*/

var server = app.listen(process.env.PORT, function ()
{
	var port = server.address().port;
	console.log('Collab-OnePage listening at port %s', port);
});
