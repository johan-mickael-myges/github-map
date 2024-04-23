"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapImageLayer = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
exports.ITiledMapImageLayer = zod_1.z.object({
    image: zod_1.z.string(),
    name: zod_1.z.string(),
    opacity: zod_1.z.number(),
    type: zod_1.z.literal('imagelayer'),
    visible: zod_1.z.boolean(),
    height: zod_1.z.number().optional(),
    id: zod_1.z.number().optional(),
    offsetx: zod_1.z.number().optional(),
    offsety: zod_1.z.number().optional(),
    parallaxx: zod_1.z.number().optional(),
    parallaxy: zod_1.z.number().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    repeatx: zod_1.z.boolean().optional(),
    repeaty: zod_1.z.boolean().optional(),
    startx: zod_1.z.number().optional(),
    starty: zod_1.z.number().optional(),
    tintcolor: zod_1.z.string().optional(),
    class: zod_1.z.string().optional(),
    width: zod_1.z.number().optional(),
    x: zod_1.z.number().optional(),
    y: zod_1.z.number().optional(),
});
//# sourceMappingURL=ITiledMapImageLayer.js.map