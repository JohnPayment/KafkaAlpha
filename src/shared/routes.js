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

import levelHandler from "./components/levelHandler";
import bedroomHandler from "./components/level-0/bedroom";

export default (
	<Route name="root" handler={ AppRouter } path="/">
		<DefaultRoute handler={ splashHandler } />
		<Route name="level-0" handler={ levelHandler } path="level-0/">
			<Route name="bedroom" handler={ bedroomHandler } path="bedroom/" />
		</Route>
	</Route>
);
