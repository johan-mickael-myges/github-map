"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapText = void 0;
const zod_1 = require("zod");
exports.ITiledMapText = zod_1.z.object({
    text: zod_1.z.string(),
    bold: zod_1.z.boolean().optional(),
    color: zod_1.z.string().optional(),
    fontfamily: zod_1.z.string().optional(),
    halign: zod_1.z.enum(['center', 'right', 'justify', 'left']).optional(),
    italic: zod_1.z.boolean().optional(),
    kerning: zod_1.z.boolean().optional(),
    pixelsize: zod_1.z.number().optional(),
    strikeout: zod_1.z.boolean().optional(),
    underline: zod_1.z.boolean().optional(),
    valign: zod_1.z.enum(['center', 'bottom', 'top']).optional(),
    wrap: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=ITiledMapText.js.map