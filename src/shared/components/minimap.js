import React from "react";
import cookie from 'react-cookie';

var res = require("resources");

var playerStats = React.createClass(
{
	getInitialState: function()
	{
		if (typeof(window) == 'undefined')
		{
			global.window = new Object();
		}

		return {};
	},

	render: function()
	{
		return	<span className="map">
					<span className="mapInterior">
					</span>
				</span>;
	}
});

module.exports = playerStats;
