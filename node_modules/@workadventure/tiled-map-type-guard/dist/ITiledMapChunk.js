"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapChunk = void 0;
const zod_1 = require("zod");
exports.ITiledMapChunk = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.string(), zod_1.z.number().array()]),
    height: zod_1.z.number(),
    width: zod_1.z.number(),
    x: zod_1.z.number(),
    y: zod_1.z.number(),
});
//# sourceMappingURL=ITiledMapChunk.js.map