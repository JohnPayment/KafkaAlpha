
import React from "react";
import {RouteHandler} from "react-router";

import Minimap from "./minimap"
import PlayerStats from "./playerStats"
import Inventory from "./inventory/inventory"

export default class AppHandler extends React.Component
{
	render()
	{
		return	<div id="content">
					<div className="levelHeader">
						<Minimap />
						<PlayerStats />
					</div>
					<div className="gameboard">
						<RouteHandler />
					</div>
					<Inventory />
				</div>
	}
}
