import { z } from 'zod';
export declare const ITiledMapPoint: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    x: number;
    y: number;
}, {
    x: number;
    y: number;
}>;
export declare type ITiledMapPoint = z.infer<typeof ITiledMapPoint>;
