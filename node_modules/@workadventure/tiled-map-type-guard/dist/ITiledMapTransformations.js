"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapTransformations = void 0;
const zod_1 = require("zod");
exports.ITiledMapTransformations = zod_1.z.object({
    hflip: zod_1.z.boolean().optional(),
    vflip: zod_1.z.boolean().optional(),
    rotate: zod_1.z.boolean().optional(),
    preferuntransformed: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=ITiledMapTransformations.js.map