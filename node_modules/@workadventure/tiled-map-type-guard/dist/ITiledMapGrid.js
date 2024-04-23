"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapGrid = void 0;
const zod_1 = require("zod");
exports.ITiledMapGrid = zod_1.z.object({
    width: zod_1.z.number(),
    height: zod_1.z.number(),
    orientation: zod_1.z.enum(['orthogonal', 'isometric']),
});
//# sourceMappingURL=ITiledMapGrid.js.map