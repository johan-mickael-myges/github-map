import { z } from 'zod';
export declare const ITiledMapWangTile: z.ZodObject<{
    tileid: z.ZodNumber;
    wangid: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    tileid: number;
    wangid: number[];
}, {
    tileid: number;
    wangid: number[];
}>;
export declare type ITiledMapWangTile = z.infer<typeof ITiledMapWangTile>;
