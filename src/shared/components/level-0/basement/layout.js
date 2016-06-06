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
						[blk, blk, blk, blk, blk, blk, blk, blk],
						[blk, blk, blk, blk, blk, blk, blk, blk],
						[blk, blk, flr, flr, flr, flr, blk, blk],
						[blk, blk, wal, flr, flr, flr, blk, blk],
						[blk, blk, wal, flr, flr, flr, blk, blk],
						[blk, blk, wal, wal, flr, flr, blk, blk],
						[blk, blk, blk, blk, blk, blk, blk, blk],
						[blk, blk, blk, blk, blk, blk, blk, blk]
					];

var bedroomDoorComponent = <Doorway description="Doorway to bedroom." image="door.png" destination="/level-0/bedroom/" />;
var bedroomDoor = 	{
						posX: 2,
						posY: 2,
						component: bedroomDoorComponent
					};

exports.gameObjects =  [bedroomDoor];
