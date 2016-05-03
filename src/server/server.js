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

		console.log(Handler)

		let content = React.renderToString(<Handler userData={userData}/>);
		res.render('index', {	content: content,
								props: JSON.stringify(props),
								title: "Kafka Alpha"});
	});
});

//----------------------------------------------------------------------------------------------------------------------
// User Pages
//----------------------------------------------------------------------------------------------------------------------
//User(app, Router, routes, React);

// Redirect to Index Page on linking to a page which does not exist.
app.use(function(req, res, next)
{
	res.redirect("/");
});

var server = app.listen(process.env.PORT, function ()
{
	var port = server.address().port;
	console.log('Collab-OnePage listening at port %s', port);
});
