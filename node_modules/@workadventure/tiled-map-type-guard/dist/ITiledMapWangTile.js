"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapWangTile = void 0;
const zod_1 = require("zod");
exports.ITiledMapWangTile = zod_1.z.object({
    tileid: zod_1.z.number(),
    wangid: zod_1.z.number().array(),
});
//# sourceMappingURL=ITiledMapWangTile.js.map