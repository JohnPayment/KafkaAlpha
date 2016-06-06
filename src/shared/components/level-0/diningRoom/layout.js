import React from "react";
var Doorway = require('../../generics/doorway');

var blk = 	{
				image: "blackdrop"
			};
var flr = 	{
				image: "floor.png"
			};
var wal = 	{
				image: "wall"
			};

exports.layout = 	[
						[wal, flr, flr, flr, flr, flr, flr, wal],
						[wal, flr, flr, flr, flr, flr, flr, wal],
						[flr, flr, flr, flr, flr, flr, flr, flr],
						[flr, flr, flr, flr, flr, flr, flr, wal]
					];

var upstairsDoorComponent = <Doorway description="A staircase leading upstairs." image="door.png" destination="/level-0/upstairs/" />;
var upstairsDoor = 	{
							posX: 1,
							posY: 0,
							component: upstairsDoorComponent
						};


var denDoorComponent = <Doorway description="Doorway to the den." image="door.png" destination="/level-0/den/" />;
var denDoor = 	{
						posX: 7,
						posY: 2,
						component: denDoorComponent
					};

exports.gameObjects =  [upstairsDoor, denDoor];
