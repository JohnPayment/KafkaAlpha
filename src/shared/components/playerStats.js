import React from "react";
import cookie from 'react-cookie';

var funct = require('./reactFunctions');

var res = require("resources");

var playerStats = React.createClass(
{
	getInitialState: function()
	{
		var totalHP = cookie.load("totalHP", {path: "KafkaAlpha"});
		var currentHP = cookie.load("currentHP", {path: "KafkaAlpha"});

		if(totalHP == null)
		{
			console.log("setting new HP values");
			totalHP = res.defaultHP;
			currentHP = res.defaultHP;

			cookie.save('totalHP', totalHP, {path: "KafkaAlpha"});
			cookie.save('currentHP', currentHP, {path: "KafkaAlpha"});
		} else
		{
			console.log("Current HP Value: " + currentHP);
		}

		var totalSP = cookie.load("totalSP", {path: "KafkaAlpha"});
		var currentSP = cookie.load("currentSP", {path: "KafkaAlpha"});

		if(totalSP == null)
		{
			console.log("setting new SP values");

			totalSP = res.defaultSP;
			currentSP = res.defaultSP;

			cookie.save('totalSP', totalSP, {path: "KafkaAlpha"});
			cookie.save('currentSP', currentSP, {path: "KafkaAlpha"});
		} else
		{
			console.log("Current SP Value: " + currentSP);
		}

		funct.setContinuePoint();

		return {totalHP: totalHP,
				currentHP: currentHP,
				totalSP: totalSP,
				currentSP: currentSP};
	},

	render: function()
	{

		var hpStyle = {
			width: "calc(" + ((this.state.currentHP / this.state.totalHP) * 100) + "% - 4px)"
		};

		var spStyle = {
			width: "calc(" + ((this.state.currentSP / this.state.totalSP) * 100) + "% - 4px)"
		};

		return	<span className="statContainer">
					<span className="hpBar">
						<span className="hpBarInterior" style={hpStyle}>
						</span>
					</span>
					<span className="hpBar">
						<span className="spBarInterior" style={spStyle}>
						</span>
					</span>
				</span>;
	}
});

module.exports = playerStats;
