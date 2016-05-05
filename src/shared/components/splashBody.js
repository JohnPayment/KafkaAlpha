import React from "react";
import {Link} from 'react-router';
import cookie from 'react-cookie';

var splashBody = React.createClass(
{
	getInitialState: function()
	{
		if (typeof(window) == 'undefined')
		{
			global.window = new Object();
		}

		var lastPage = cookie.load('continue');
		var cont = lastPage != null;

		return {continue: cont,
				lastPage: lastPage};
	},

	render()
	{
		var continueButton = null;

		if(this.state.continue)
		{
			continueButton = <div className="StartButton" to={this.state.lastPage}>{"Continue"}</div>
		}

		return	<div>
					<div className="Title">{"Kafka Alpha"}</div>
					<div className="StartButtonContainer">
						<Link className="StartButton" to="/level-0/bedroom">{"Start"}</Link>
						{continueButton}
					</div>
				</div>;
	}
});

module.exports = splashBody;
