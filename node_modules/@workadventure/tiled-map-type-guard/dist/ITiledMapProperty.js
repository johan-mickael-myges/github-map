"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapProperty = void 0;
const zod_1 = require("zod");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean(), zod_1.z.null()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([literalSchema, zod_1.z.array(jsonSchema), zod_1.z.record(jsonSchema)]));
const ITiledMapStringProperty = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.union([zod_1.z.literal('string'), zod_1.z.literal('color'), zod_1.z.literal('file')]),
    value: zod_1.z.string().optional(),
    propertytype: zod_1.z.string().optional(),
});
const ITiledMapIntProperty = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.union([zod_1.z.literal('int'), zod_1.z.literal('object')]),
    value: zod_1.z.number().int().optional(),
    propertytype: zod_1.z.string().optional(),
});
const ITiledMapFloatProperty = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.literal('float'),
    value: zod_1.z.number().optional(),
    propertytype: zod_1.z.string().optional(),
});
const ITiledMapBoolProperty = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.literal('bool'),
    value: zod_1.z.boolean().optional(),
    propertytype: zod_1.z.string().optional(),
});
const ITiledMapClassProperty = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.literal('class'),
    value: jsonSchema.optional(),
    propertytype: zod_1.z.string().optional(),
});
exports.ITiledMapProperty = zod_1.z.union([
    ITiledMapStringProperty,
    ITiledMapIntProperty,
    ITiledMapFloatProperty,
    ITiledMapBoolProperty,
    ITiledMapClassProperty,
]);
//# sourceMappingURL=ITiledMapProperty.js.map