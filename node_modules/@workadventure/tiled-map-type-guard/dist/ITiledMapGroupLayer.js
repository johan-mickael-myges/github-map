"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapGroupLayer = void 0;
const zod_1 = require("zod");
const ITiledMapProperty_1 = require("./ITiledMapProperty");
const ITiledMapLayer_1 = require("./ITiledMapLayer");
exports.ITiledMapGroupLayer = zod_1.z.lazy(() => zod_1.z.object({
    name: zod_1.z.string(),
    opacity: zod_1.z.number(),
    type: zod_1.z.literal('group'),
    layers: ITiledMapLayer_1.ITiledMapLayer.array(),
    visible: zod_1.z.boolean(),
    height: zod_1.z.number().optional(),
    draworder: zod_1.z.string().optional(),
    id: zod_1.z.number().optional(),
    class: zod_1.z.string().optional(),
    offsetx: zod_1.z.number().optional(),
    offsety: zod_1.z.number().optional(),
    parallaxx: zod_1.z.number().optional(),
    parallaxy: zod_1.z.number().optional(),
    properties: ITiledMapProperty_1.ITiledMapProperty.array().optional(),
    startx: zod_1.z.number().optional(),
    starty: zod_1.z.number().optional(),
    tintcolor: zod_1.z.string().optional(),
    width: zod_1.z.number().optional(),
    x: zod_1.z.number().optional(),
    y: zod_1.z.number().optional(),
}));
//# sourceMappingURL=ITiledMapGroupLayer.js.map