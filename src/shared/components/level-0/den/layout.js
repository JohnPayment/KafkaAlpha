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
						[flr, flr, flr, flr, flr, flr, flr, flr],
						[wal, flr, flr, flr, flr, flr, flr, wal],
						[wal, flr, flr, flr, flr, flr, flr, wal]
					];

var diningRoomDoorComponent = <Doorway description="Doorway to Dining Room." image="door.png" destination="/level-0/diningRoom/" />;
var diningRoomDoor = 	{
							posX: 0,
							posY: 1,
							component: diningRoomDoorComponent
						};


var bedroomDoorComponent = <Doorway description="Doorway to bedroom." image="door.png" destination="/level-0/bedroom/" />;
var bedroomDoor = 	{
						posX: 7,
						posY: 1,
						component: bedroomDoorComponent
					};

exports.gameObjects =  [diningRoomDoor, bedroomDoor];
