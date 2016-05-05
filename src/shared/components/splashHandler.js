
import React from "react";

var SplashBody = require('./splashBody');

export default class AppHandler extends React.Component
{
	render()
	{
		return	<div id="container">
					<SplashBody />
				</div>
	}
}
