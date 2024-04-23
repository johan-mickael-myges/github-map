"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapObjectLayer = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapObject_1 = require("./ITiledMapObject");
exports.ITiledMapObjectLayer = zod_1.z.object({
    name: zod_1.z.string(),
    objects: ITiledMapObject_1.ITiledMapObject.array(),
    opacity: zod_1.z.number(),
    type: zod_1.z.literal('objectgroup'),
    visible: zod_1.z.boolean(),
    draworder: zod_1.z.string().optional(),
    height: zod_1.z.number().optional(),
    id: zod_1.z.number().optional(),
    offsetx: zod_1.z.number().optional(),
    offsety: zod_1.z.number().optional(),
    parallaxx: zod_1.z.number().optional(),
    parallaxy: zod_1.z.number().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    startx: zod_1.z.number().optional(),
    starty: zod_1.z.number().optional(),
    tintcolor: zod_1.z.string().optional(),
    width: zod_1.z.number().optional(),
    class: zod_1.z.string().optional(),
    x: zod_1.z.number().optional(),
    y: zod_1.z.number().optional(),
});
//# sourceMappingURL=ITiledMapObjectLayer.js.map