"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapTile = void 0;
const zod_1 = require("zod");
const ITiledMapFrame_1 = require("./ITiledMapFrame");
const ITiledMapObjectLayer_1 = require("./ITiledMapObjectLayer");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapTerrain_1 = require("./ITiledMapTerrain");
exports.ITiledMapTile = zod_1.z.object({
    id: zod_1.z.number(),
    animation: ITiledMapFrame_1.ITiledMapFrame.array().optional(),
    image: zod_1.z.string().optional(),
    imageheight: zod_1.z.number().optional(),
    imagewidth: zod_1.z.number().optional(),
    x: zod_1.z.number().optional(),
    y: zod_1.z.number().optional(),
    width: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    objectgroup: ITiledMapObjectLayer_1.ITiledMapObjectLayer.optional(),
    probability: zod_1.z.number().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    class: zod_1.z.string().optional(),
    terrain: ITiledMapTerrain_1.ITiledMapTerrain.array().optional(),
    type: zod_1.z.string().optional(),
});
//# sourceMappingURL=ITiledMapTile.js.map