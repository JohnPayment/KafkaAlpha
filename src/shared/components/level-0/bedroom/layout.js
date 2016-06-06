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
						[flr, flr, flr, flr, wal, flr, flr, flr],
						[flr, flr, flr, flr, wal, flr, flr, flr],
						[flr, flr, flr, flr, wal, flr, flr, flr],
						[flr, flr, flr, flr, wal, flr, flr, flr],
						[flr, flr, flr, flr, wal, flr, flr, flr],
						[wal, wal, wal, flr, wal, flr, wal, wal],
						[flr, flr, flr, flr, flr, flr, flr, flr],
						[flr, flr, flr, flr, flr, flr, flr, flr]
					];

var denDoorComponent = <Doorway description="Doorway to Den." image="door.png" destination="/level-0/den/" />;
var denDoor = 	{
						posX: 0,
						posY: 6,
						component: denDoorComponent
					};

var kitchenDoorComponent = <Doorway description="Doorway to Kitchen." image="door.png" destination="/level-0/kitchen/" />;
var kitchenDoor = 	{
						posX: 7,
						posY: 6,
						component: kitchenDoorComponent
					};

var basementDoorComponent = <Doorway description="A heavy door leading to the basement. It's locked." image="door.png" destination="/level-0/basement/" />;
var basementDoor = 	{
						posX: 3,
						posY: 7,
						component: basementDoorComponent
					};

exports.gameObjects =  [denDoor, kitchenDoor, basementDoor];
