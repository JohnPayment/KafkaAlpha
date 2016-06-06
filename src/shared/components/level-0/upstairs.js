
import React from "react";

var roomLayout = require('./upstairs/layout');
var RoomBuilder = require('../roomBuilder');

export default class AppHandler extends React.Component
{
	render()
	{
		return	<div id="container">
					<RoomBuilder backgroundLayout={roomLayout.layout} gameObjects={roomLayout.gameObjects} />
				</div>;
	}
}
