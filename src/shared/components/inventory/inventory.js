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

		var itemsString = cookie.load('items');
		var items = [];
		if(itemsString != null)
		{
			items = JSON.parse(itemsString);
		}

		return {items: items};
	},

	render()
	{
		return	<div className="inventory">
					<span className="inventoryPage">
						<span className="inventoryItem">
						</span>
					</span>
				</div>;
	}
});

module.exports = playerStats;
