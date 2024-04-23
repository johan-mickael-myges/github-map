"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapEmbeddedTileset = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapTerrain_1 = require("./ITiledMapTerrain");
const ITiledMapGrid_1 = require("./ITiledMapGrid");
const ITiledMapOffset_1 = require("./ITiledMapOffset");
const ITiledMapTile_1 = require("./ITiledMapTile");
const ITiledMapTransformations_1 = require("./ITiledMapTransformations");
const ITiledMapWangSet_1 = require("./ITiledMapWangSet");
exports.ITiledMapEmbeddedTileset = zod_1.z.object({
    name: zod_1.z.string(),
    image: zod_1.z.string(),
    backgroundcolor: zod_1.z.string().optional(),
    columns: zod_1.z.number().optional(),
    fillmode: zod_1.z.enum(['stretch', 'preserve-aspect-fit']).optional(),
    firstgid: zod_1.z.number().optional(),
    grid: ITiledMapGrid_1.ITiledMapGrid.optional(),
    id: zod_1.z.number().optional(),
    imageheight: zod_1.z.number().optional(),
    imagewidth: zod_1.z.number().optional(),
    margin: zod_1.z.number().optional(),
    objectalignment: zod_1.z.string().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    spacing: zod_1.z.number().optional(),
    terrains: ITiledMapTerrain_1.ITiledMapTerrain.array().optional(),
    tilecount: zod_1.z.number().optional(),
    tiledversion: zod_1.z.string().optional(),
    tileheight: zod_1.z.number().optional(),
    tileoffset: ITiledMapOffset_1.ITiledMapOffset.optional(),
    tilerendersize: zod_1.z.enum(['tile', 'grid']).optional(),
    tiles: ITiledMapTile_1.ITiledMapTile.array().optional(),
    tilewidth: zod_1.z.number().optional(),
    transformations: ITiledMapTransformations_1.ITiledMapTransformations.optional(),
    transparentcolor: zod_1.z.string().optional(),
    type: zod_1.z.literal('tileset').optional(),
    class: zod_1.z.string().optional(),
    version: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
    wangsets: ITiledMapWangSet_1.ITiledMapWangSet.array().optional(),
});
//# sourceMappingURL=ITiledMapEmbeddedTileset.js.map