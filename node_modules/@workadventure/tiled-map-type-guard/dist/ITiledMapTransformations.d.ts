import { z } from 'zod';
export declare const ITiledMapTransformations: z.ZodObject<{
    hflip: z.ZodOptional<z.ZodBoolean>;
    vflip: z.ZodOptional<z.ZodBoolean>;
    rotate: z.ZodOptional<z.ZodBoolean>;
    preferuntransformed: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    hflip?: boolean | undefined;
    vflip?: boolean | undefined;
    rotate?: boolean | undefined;
    preferuntransformed?: boolean | undefined;
}, {
    hflip?: boolean | undefined;
    vflip?: boolean | undefined;
    rotate?: boolean | undefined;
    preferuntransformed?: boolean | undefined;
}>;
export declare type ITiledMapTransformations = z.infer<typeof ITiledMapTransformations>;
