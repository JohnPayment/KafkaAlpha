/*
 * Component: React
 * Module: routes.js
 * Author: John Payment
 *
 * Notes: Packages the React webpage into a handler for rendering by server.js
 */
import { Route, DefaultRoute } from "react-router";
import React from "react";

import AppRouter from "./components/AppRouter";
import splashHandler from "./components/splashHandler";

//import AddUserHandler from "./components/AddUserHandler";
//import LoginHandler from "./LoginHandler";
//import PasswordHandler from "./components/PasswordHandler";

export default (
	<Route name="root" handler={ AppRouter } path="/">
		<DefaultRoute handler={ splashHandler } />
	</Route>
	/*<Route name="AddUser" handler={ AddUserHandler } path="Admin/AddUser" />
	<Route name="Login" handler={ LoginHandler } path="Login" />
	<Route name="Password" handler={ PasswordHandler } path="ChangePassword" />*/
);
