import React from "react";
import {Link} from 'react-router';
import cookie from 'react-cookie';

var splashBody = React.createClass(
{
	getInitialState: function()
	{
		var lastPage = cookie.load("continue", {path: "KafkaAlpha"});
		var cont = (lastPage != null);

		console.log("Last Page: " + lastPage);

		return {continue: cont,
				lastPage: lastPage};
	},

	render: function()
	{
		var continueButton = null;

		if(this.state.continue)
		{
			continueButton = <a className="StartButton" href={this.state.lastPage}>{"Continue"}</a>;
		}

		return	<div>
					<div className="Title">{"Kafka Alpha"}</div>
					<div className="StartButtonContainer">
						<Link className="StartButton" to="/level-0/bedroom/">{"Start"}</Link>
						{continueButton}
					</div>
				</div>;
	}
});

module.exports = splashBody;
