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
						[flr, flr, flr, wal, flr, flr, flr, flr],
						[flr, flr, flr, wal, flr, flr, flr, flr],
						[flr, flr, flr, wal, flr, flr, flr, flr],
						[flr, flr, flr, flr, flr, wal, wal, wal],
						[flr, flr, flr, flr, flr, flr, wal, wal],
						[flr, flr, flr, flr, flr, wal, wal, wal],
						[flr, flr, flr, flr, flr, flr, flr, flr],
						[flr, flr, flr, flr, flr, wal, flr, flr]
					];

var diningRoomDoorComponent = <Doorway description="Staircase leading to the dining room" image="door.png" destination="/level-0/diningRoom/" />;
var diningRoomDoor = 	{
						posX: 4,
						posY: 7,
						component: diningRoomDoorComponent
					};

exports.gameObjects =  [diningRoomDoor];
