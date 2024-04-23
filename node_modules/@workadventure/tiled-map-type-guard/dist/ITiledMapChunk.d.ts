import { z } from 'zod';
export declare const ITiledMapChunk: z.ZodObject<{
    data: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodNumber, "many">]>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    x: z.ZodNumber;
    y: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: string | number[];
    height: number;
    width: number;
    x: number;
    y: number;
}, {
    data: string | number[];
    height: number;
    width: number;
    x: number;
    y: number;
}>;
export declare type ITiledMapChunk = z.infer<typeof ITiledMapChunk>;
