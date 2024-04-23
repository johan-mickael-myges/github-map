"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapFrame = void 0;
const zod_1 = require("zod");
exports.ITiledMapFrame = zod_1.z.object({
    duration: zod_1.z.number(),
    tileid: zod_1.z.number(),
});
//# sourceMappingURL=ITiledMapFrame.js.map