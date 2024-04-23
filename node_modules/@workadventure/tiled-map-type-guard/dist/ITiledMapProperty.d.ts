import { z } from 'zod';
declare const literalSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
declare type Literal = z.infer<typeof literalSchema>;
export declare type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const ITiledMapProperty: z.ZodUnion<[z.ZodObject<{
    name: z.ZodString;
    type: z.ZodUnion<[z.ZodLiteral<"string">, z.ZodLiteral<"color">, z.ZodLiteral<"file">]>;
    value: z.ZodOptional<z.ZodString>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: string | undefined;
    propertytype?: string | undefined;
    type: "string" | "color" | "file";
    name: string;
}, {
    value?: string | undefined;
    propertytype?: string | undefined;
    type: "string" | "color" | "file";
    name: string;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodUnion<[z.ZodLiteral<"int">, z.ZodLiteral<"object">]>;
    value: z.ZodOptional<z.ZodNumber>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: number | undefined;
    propertytype?: string | undefined;
    type: "object" | "int";
    name: string;
}, {
    value?: number | undefined;
    propertytype?: string | undefined;
    type: "object" | "int";
    name: string;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"float">;
    value: z.ZodOptional<z.ZodNumber>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: number | undefined;
    propertytype?: string | undefined;
    type: "float";
    name: string;
}, {
    value?: number | undefined;
    propertytype?: string | undefined;
    type: "float";
    name: string;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"bool">;
    value: z.ZodOptional<z.ZodBoolean>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: boolean | undefined;
    propertytype?: string | undefined;
    type: "bool";
    name: string;
}, {
    value?: boolean | undefined;
    propertytype?: string | undefined;
    type: "bool";
    name: string;
}>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<"class">;
    value: z.ZodOptional<z.ZodType<Json, z.ZodTypeDef, Json>>;
    propertytype: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: Json | undefined;
    propertytype?: string | undefined;
    type: "class";
    name: string;
}, {
    value?: Json | undefined;
    propertytype?: string | undefined;
    type: "class";
    name: string;
}>]>;
export declare type ITiledMapProperty = z.infer<typeof ITiledMapProperty>;
export {};
