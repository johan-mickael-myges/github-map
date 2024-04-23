"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapTerrain = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
exports.ITiledMapTerrain = zod_1.z.object({
    name: zod_1.z.string(),
    tile: zod_1.z.number(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
});
//# sourceMappingURL=ITiledMapTerrain.js.map