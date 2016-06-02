import React from "react";

var resources = require('resources');

/**
 * props:
 * backgroundLayout - 8x8 grid which specifies the background tileset to use for each tile in the roomBuilder
 * gameObjects - a list of objects. All objects have the following parameters, with interactable objects having
 *               additional properties defined elsewhere.
 * 		posX - The object's horizontal position on the grid, from 0 to 9
 *		posY - The object's vertical position on the grid, from 0 to 9
 *		component - The actual gameobject component
 */
var roomBuilder = React.createClass(
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
		return	<span className="room">
					{this.renderRows()}
				</span>;
	},

	renderRows: function()
	{
		var rows = [];

		for(var i = 0; i < this.props.backgroundLayout.length; ++i)
		{
			rows.push(<span key={i} className="roomTileRow">{this.renderRow(i)}</span>);
		}

		return rows;
	},

	renderRow: function(index)
	{
		var tiles = [];

		for(var i = 0; i < this.props.backgroundLayout[index].length; ++i)
		{
			tiles.push(<span key={i} className="roomTile" style={this.renderTile(index, i)}>{this.renderObject(index, i)}</span>);
		}

		return tiles;
	},

	renderTile: function(posy, posx)
	{
		return {"backgroundImage": "url(/" + resources.IMAGE_DIR + this.props.backgroundLayout[posy][posx].image + ")"};
	},

	renderObject: function(posy, posx)
	{
		/*
		for(var i = 0; i < this.props.gameObjects.length; ++i)
		{
			if(this.props.gameObjects[i].posX == posx && this.props.gameObjects[i].posY == posy)
			{
				return this.props.gameObjects[i].image;
			}
		}*/

		return null;
	}
});

module.exports = roomBuilder;
