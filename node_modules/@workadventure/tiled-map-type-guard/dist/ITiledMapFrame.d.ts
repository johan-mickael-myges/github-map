import { z } from 'zod';
export declare const ITiledMapFrame: z.ZodObject<{
    duration: z.ZodNumber;
    tileid: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    duration: number;
    tileid: number;
}, {
    duration: number;
    tileid: number;
}>;
export declare type ITiledMapFrame = z.infer<typeof ITiledMapFrame>;
