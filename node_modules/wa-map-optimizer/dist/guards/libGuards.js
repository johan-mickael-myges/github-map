import { z } from "zod";
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["NORMAL"] = 1] = "NORMAL";
    LogLevel[LogLevel["VERBOSE"] = 2] = "VERBOSE";
})(LogLevel || (LogLevel = {}));
const isLogLevel = z.nativeEnum(LogLevel);
const isOptimizeBufferOptions = z.object({
    tile: z
        .object({
        size: z.number().positive().optional(),
    })
        .optional(),
    logs: isLogLevel.optional(),
    output: z
        .object({
        tileset: z
            .object({
            prefix: z.string().optional(),
            suffix: z.string().optional(),
            size: z.number().gte(32).multipleOf(8).optional(),
        })
            .optional(),
    })
        .optional(),
});
const isOptimizeOptions = isOptimizeBufferOptions.extend({
    output: z
        .object({
        map: z
            .object({
            name: z.string().optional(),
        })
            .optional(),
        path: z.string().optional(),
        tileset: z
            .object({
            prefix: z.string().optional(),
            suffix: z.string().optional(),
            size: z.number().gte(32).multipleOf(8).optional(),
            compress: z
                .object({
                quality: z.tuple([z.number().gte(0).lte(1), z.number().gte(0).lte(1)]).optional(),
            })
                .optional(),
        })
            .optional(),
    })
        .optional(),
});
