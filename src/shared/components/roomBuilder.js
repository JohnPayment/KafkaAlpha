import React from "react";

/**
 * props:
 * backgroundLayout - 10x10 grid which specifies the background tileset to use for each tile in the roomBuilder
 * gameObjects - a list of objects. All objects have the following parameters, with interactable objects having
 *               additional properties defined elsewhere.
 * 		posX - The object's horizontal position on the grid, from 0 to 9
 *		posY - The object's vertical position on the grid, from 0 to 9
 *		interactable - a boolean indicating whether this object is interactable
 *		image - the sprite rendered for the game object.
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

	render()
	{
		return	<span>
					{this.renderRows()}
				</span>;
	},

	renderRows: function()
	{
		var rows = [];

		for(var i = 0; i < 10; ++i)
		{
			rows.push(<span>{this.renderRow(i)}</span>);
		}

		return rows;
	},

	renderRow: function(index)
	{
		var tiles = [];

		for(var i = 0; i < 10; ++i)
		{
			tiles.push(<span>{this.renderTile(index, i)}{this.renderObject(index, i)}</span>);
		}

		return tiles;
	},

	renderTile: function(posy, posx)
	{
		return this.props.backgroundLayout[posy][posx];
	},

	renderObject: function(posy, posx)
	{
		for(var i = 0; i < this.props.gameObjects.length; ++i)
		{
			if(this.props.gameObjects[i].posX == posx && this.props.gameObjects[i].posY == posy)
			{
				return this.props.gameObjects[i].image;
			}
		}

		return null;
	}
});

module.exports = roomBuilder;
