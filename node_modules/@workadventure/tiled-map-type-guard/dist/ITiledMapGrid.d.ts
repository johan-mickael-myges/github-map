import { z } from 'zod';
export declare const ITiledMapGrid: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    orientation: z.ZodEnum<["orthogonal", "isometric"]>;
}, "strip", z.ZodTypeAny, {
    height: number;
    width: number;
    orientation: "orthogonal" | "isometric";
}, {
    height: number;
    width: number;
    orientation: "orthogonal" | "isometric";
}>;
export declare type ITiledMapGrid = z.infer<typeof ITiledMapGrid>;
