"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapTilesetReference = void 0;
const zod_1 = require("zod");
exports.ITiledMapTilesetReference = zod_1.z
    .object({
    firstgid: zod_1.z.number(),
    source: zod_1.z.string(),
})
    .strict();
//# sourceMappingURL=ITiledMapTilesetReference.js.map