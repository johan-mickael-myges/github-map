"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapWangColor = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
exports.ITiledMapWangColor = zod_1.z.object({
    name: zod_1.z.string(),
    color: zod_1.z.string(),
    tile: zod_1.z.number(),
    probability: zod_1.z.number(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    type: zod_1.z.string().optional(),
    class: zod_1.z.string().optional(),
});
//# sourceMappingURL=ITiledMapWangColor.js.map