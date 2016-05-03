import React from "react";
import {Link} from 'react-router';

var splashBody = React.createClass(
{
	getInitialState: function()
	{
		if (typeof(window) == 'undefined')
		{
			global.window = new Object();
		}

		return {continue: false};
	},

	render()
	{
		return	<div>
					<div className="Title">{"Kafka Alpha"}</div>
					<div className="StartButtonContainer">
						<Link className="StartButton" to="/level-0/bedroom">{"Start"}</Link>
					</div>
				</div>;
	}
});

module.exports = splashBody;
