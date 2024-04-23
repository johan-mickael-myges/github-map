import { z } from 'zod';
export declare const ITiledMapTilesetReference: z.ZodObject<{
    firstgid: z.ZodNumber;
    source: z.ZodString;
}, "strict", z.ZodTypeAny, {
    firstgid: number;
    source: string;
}, {
    firstgid: number;
    source: string;
}>;
export declare type ITiledMapTilesetReference = z.infer<typeof ITiledMapTilesetReference>;
