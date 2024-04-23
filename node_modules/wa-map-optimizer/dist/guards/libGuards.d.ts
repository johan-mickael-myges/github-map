import { z } from "zod";
export declare enum LogLevel {
    NONE = 0,
    NORMAL = 1,
    VERBOSE = 2
}
declare const isOptimizeBufferOptions: z.ZodObject<{
    tile: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        size?: number | undefined;
    }, {
        size?: number | undefined;
    }>>;
    logs: z.ZodOptional<z.ZodNativeEnum<typeof LogLevel>>;
    output: z.ZodOptional<z.ZodObject<{
        tileset: z.ZodOptional<z.ZodObject<{
            prefix: z.ZodOptional<z.ZodString>;
            suffix: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
        }, {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
        } | undefined;
    }, {
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
        } | undefined;
    } | undefined;
}, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
        } | undefined;
    } | undefined;
}>;
export type OptimizeBufferOptions = z.infer<typeof isOptimizeBufferOptions>;
declare const isOptimizeOptions: z.ZodObject<{
    tile: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        size?: number | undefined;
    }, {
        size?: number | undefined;
    }>>;
    logs: z.ZodOptional<z.ZodNativeEnum<typeof LogLevel>>;
    output: z.ZodOptional<z.ZodObject<{
        map: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
        }, {
            name?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodString>;
        tileset: z.ZodOptional<z.ZodObject<{
            prefix: z.ZodOptional<z.ZodString>;
            suffix: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            compress: z.ZodOptional<z.ZodObject<{
                quality: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
            }, "strip", z.ZodTypeAny, {
                quality?: [number, number] | undefined;
            }, {
                quality?: [number, number] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
            compress?: {
                quality?: [number, number] | undefined;
            } | undefined;
        }, {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
            compress?: {
                quality?: [number, number] | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
            compress?: {
                quality?: [number, number] | undefined;
            } | undefined;
        } | undefined;
    }, {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
            compress?: {
                quality?: [number, number] | undefined;
            } | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
            compress?: {
                quality?: [number, number] | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            size?: number | undefined;
            compress?: {
                quality?: [number, number] | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>;
export type OptimizeOptions = z.infer<typeof isOptimizeOptions>;
export {};
