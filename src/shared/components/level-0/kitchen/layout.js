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
						[flr, flr, flr, flr, flr, flr, flr, flr],
						[wal, flr, flr, flr, flr, flr, flr, flr],
						[wal, flr, flr, flr, flr, flr, flr, flr],
						[wal, flr, flr, flr, flr, flr, flr, flr]
					];

var bedroomDoorComponent = <Doorway description="Doorway to bedroom." image="door.png" destination="/level-0/bedroom/" />;
var bedroomDoor = 	{
						posX: 0,
						posY: 0,
						component: bedroomDoorComponent
					};

exports.gameObjects =  [bedroomDoor];
