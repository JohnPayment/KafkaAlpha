
import React from "react";

var roomLayout = require('./bedroom/layout');
var RoomBuilder = require('../roomBuilder');

export default class AppHandler extends React.Component
{
	render()
	{
		var objects = [0];

		return	<div id="container">
					<RoomBuilder backgroundLayout={roomLayout.layout} gameObjects={objects} />
				</div>;
	}
}
