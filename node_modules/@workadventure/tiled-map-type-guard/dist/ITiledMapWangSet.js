"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapWangSet = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapWangColor_1 = require("./ITiledMapWangColor");
const ITiledMapWangTile_1 = require("./ITiledMapWangTile");
exports.ITiledMapWangSet = zod_1.z.object({
    name: zod_1.z.string(),
    tile: zod_1.z.number(),
    colors: ITiledMapWangColor_1.ITiledMapWangColor.array().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    wangtiles: ITiledMapWangTile_1.ITiledMapWangTile.array().optional(),
    type: zod_1.z.enum(['corner', 'edge', 'mixed']),
    class: zod_1.z.string().optional(),
});
//# sourceMappingURL=ITiledMapWangSet.js.map