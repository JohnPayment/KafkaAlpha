import React from "react";

var resources = require('resources');

/**
 * props:
 * description - A description to of the object to be displayed to the player on click
 * image - What the object should look like
 * actions - a list of actions. All actions have the following properties:
 * 		image - the sprite rendered for the action's button
 *		conditions - (optional) Any requirements which must be met before the action can be used. All conditions have the following properties:
 *			cName - the variable name against which the condition will be checked
 *			op - The type of varification. (valid values: 'equal', '!equal', 'greater', 'less')
 *			val - The value against which the cookie variable will be checked.
 *		result - a function that is run when the action is used
 */
var gameObject = React.createClass(
{
	getInitialState: function()
	{
		var description = "";
		var image = "";
		var actions = [];

		if(this.props.description != null)
		{
			description = this.props.description;
		}

		if(this.props.image != null)
		{
			image = this.props.image;
		}

		if(this.props.actions != null)
		{
			actions = this.props.actions;
		}

		return {desc: description,
				image: image,
				actions: actions,
				active: false};
	},

	render: function()
	{
		var objectMenu = null;
		if(this.state.active)
		{
			objectMenu = 	<span className="gameObjectMenu">
								<span className="gameObjectDesc">
									{this.state.desc}
								</span>
								<span className="gameObjectActions">
									{this.renderActions()}
								</span>
							</span>;
		}

		return	<span className="gameObjectContainer">
					<span className="gameObject" style={{backgroundImage: "url(/" + resources.IMAGE_DIR + this.state.image + ")"}} onClick={this.toggleMenu}>
					</span>
					{objectMenu}
				</span>;
	},

	renderActions: function()
	{
		var actions = [];

		for(var i = 0; i < this.state.actions.length; ++i)
		{
			if(this.checkActionConditions(this.state.actions[i]))
			{
				actions.push(<span key={i} className="gameObjectAction" style={{backgroundImage: "url(/" + resources.IMAGE_DIR + this.state.actions[i].image + ")"}} onClick={this.state.actions[i].result}></span>);
			}
		}

		return actions;
	},

	checkActionConditions: function(action)
	{
		if(action.conditions == null || action.conditions.length == 0)
		{
			return true;
		}

		for(var i = 0; i < action.conditions.length; ++i)
		{
			var cond = cookie.load(action.conditions[i].cName, {path: "KafkaAlpha"});
			if(cond == null)
			{
				return false;
			}

			switch(action.conditions[i].op)
			{
				case "exists":
					break;
				case "equal":
					if(cond != action.conditions[i].val)
					{
						return false;
					}
					break;
				case "!equal":
					if(cond == action.conditions[i].val)
					{
						return false;
					}
					break;
				case "greater":
					if(cond <= action.conditions[i].val)
					{
						return false;
					}
					break;
				case "less":
					if(cond >= action.conditions[i].val)
					{
						return false;
					}
					break;
			}
		}

		return true;
	},

	toggleMenu: function()
	{
		this.setState({active: !(this.state.active)});
	}
});

module.exports = gameObject;
