import { PluginOption } from "vite";
import { ITiledMap } from "@workadventure/tiled-map-type-guard";
import { OptimizeOptions } from "wa-map-optimizer/dist/guards/libGuards.js";
export { OptimizeOptions, LogLevel } from "wa-map-optimizer/dist/guards/libGuards.js";
export declare function getMaps(mapDirectory?: string): Map<string, ITiledMap>;
export declare function getMapsScripts(maps: Map<string, ITiledMap>): {
    [entryAlias: string]: string;
};
export declare function getMapsOptimizers(maps: Map<string, ITiledMap>, options?: OptimizeOptions): PluginOption[];
