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

		var totalHP = cookie.load('totalHP');
		var currentHP = cookie.load('currentHP');
		if(totalHP == null)
		{
			totalHP = res.defaultHP;
			currentHP = res.defaultHP;

			cookie.save('totalHP', totalHP, {path: '/'});
			cookie.save('currentHP', currentHP, {path: '/'});
		}

		var totalSP = cookie.load('totalSP');
		var currentSP = cookie.load('currentSP');
		if(totalSP == null)
		{
			totalSP = res.defaultSP;
			currentSP = res.defaultSP;

			cookie.save('totalSP', totalSP, {path: '/'});
			cookie.save('currentSP', currentSP, {path: '/'});
		}

		return {totalHP: totalHP,
				currentHP: currentHP,
				totalSP: totalSP,
				currentSP: currentSP};
	},

	render()
	{
		return	<span>
					<span className="hpBar">
						<span className="hpBarInterior">
						</span>
					</span>
					<span className="spBar">
						<span className="spBarInterior">
						</span>
					</span>
				</span>;
	}
});

module.exports = playerStats;
