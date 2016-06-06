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
import basementHandler from "./components/level-0/basement";
import bedroomHandler from "./components/level-0/bedroom";
import denHandler from "./components/level-0/den";
import diningRoomHandler from "./components/level-0/diningRoom";
import kitchenHandler from "./components/level-0/kitchen";
import upstairsHandler from "./components/level-0/upstairs";

export default (
	<Route name="root" handler={ AppRouter } path="/">
		<DefaultRoute handler={ splashHandler } />
		<Route name="level-0" handler={ levelHandler } path="level-0/">
			<Route name="basement" handler={ basementHandler } path="basement/" />
			<Route name="bedroom" handler={ bedroomHandler } path="bedroom/" />
			<Route name="den" handler={ denHandler } path="den/" />
			<Route name="diningRoom" handler={ diningRoomHandler } path="diningRoom/" />
			<Route name="kitchen" handler={ kitchenHandler } path="kitchen/" />
			<Route name="upstairs" handler={ upstairsHandler } path="upstairs/" />
		</Route>
	</Route>
);
