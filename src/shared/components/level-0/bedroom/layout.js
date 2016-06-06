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

var kitchenDoorComponent = <Doorway description="Doorway to Kitchen." image="door.png" destination="/level-0/kitchen" />;
var kitchenDoor = 	{
						posX: 7,
						posY: 6,
						component: kitchenDoorComponent
					};

exports.gameObjects =  [kitchenDoor];
