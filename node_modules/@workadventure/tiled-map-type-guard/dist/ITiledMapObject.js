"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapObject = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapPoint_1 = require("./ITiledMapPoint");
const ITiledMapText_1 = require("./ITiledMapText");
exports.ITiledMapObject = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    visible: zod_1.z.boolean(),
    x: zod_1.z.number(),
    y: zod_1.z.number(),
    ellipse: zod_1.z.boolean().optional(),
    gid: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    point: zod_1.z.boolean().optional(),
    polygon: ITiledMapPoint_1.ITiledMapPoint.array().optional(),
    polyline: ITiledMapPoint_1.ITiledMapPoint.array().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    rotation: zod_1.z.number().optional(),
    template: zod_1.z.string().optional(),
    text: ITiledMapText_1.ITiledMapText.optional(),
    type: zod_1.z.string().optional(),
    class: zod_1.z.string().optional(),
    width: zod_1.z.number().optional(),
});
//# sourceMappingURL=ITiledMapObject.js.map