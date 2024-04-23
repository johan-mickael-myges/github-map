"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITiledMapTileset = void 0;
const zod_1 = require("zod");
const ITiledMapEmbeddedTileset_1 = require("./ITiledMapEmbeddedTileset");
const ITiledMapTilesetReference_1 = require("./ITiledMapTilesetReference");
exports.ITiledMapTileset = zod_1.z.union([ITiledMapEmbeddedTileset_1.ITiledMapEmbeddedTileset, ITiledMapTilesetReference_1.ITiledMapTilesetReference]);
//# sourceMappingURL=ITiledMapTileset.js.map