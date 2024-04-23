import { z } from 'zod';
export declare const ITiledMapObject: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    visible: z.ZodBoolean;
    x: z.ZodNumber;
    y: z.ZodNumber;
    ellipse: z.ZodOptional<z.ZodBoolean>;
    gid: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    point: z.ZodOptional<z.ZodBoolean>;
    polygon: z.ZodOptional<z.ZodArray<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>, "many">>;
    polyline: z.ZodOptional<z.ZodArray<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>, "many">>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        value: z.ZodOptional<z.ZodType<import("./ITiledMapProperty").Json, z.ZodTypeDef, import("./ITiledMapProperty").Json>>;
        propertytype: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    }, {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    }>]>, "many">>;
    rotation: z.ZodOptional<z.ZodNumber>;
    template: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        bold: z.ZodOptional<z.ZodBoolean>;
        color: z.ZodOptional<z.ZodString>;
        fontfamily: z.ZodOptional<z.ZodString>;
        halign: z.ZodOptional<z.ZodEnum<["center", "right", "justify", "left"]>>;
        italic: z.ZodOptional<z.ZodBoolean>;
        kerning: z.ZodOptional<z.ZodBoolean>;
        pixelsize: z.ZodOptional<z.ZodNumber>;
        strikeout: z.ZodOptional<z.ZodBoolean>;
        underline: z.ZodOptional<z.ZodBoolean>;
        valign: z.ZodOptional<z.ZodEnum<["center", "bottom", "top"]>>;
        wrap: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        bold?: boolean | undefined;
        fontfamily?: string | undefined;
        halign?: "center" | "right" | "justify" | "left" | undefined;
        italic?: boolean | undefined;
        kerning?: boolean | undefined;
        pixelsize?: number | undefined;
        strikeout?: boolean | undefined;
        underline?: boolean | undefined;
        valign?: "center" | "bottom" | "top" | undefined;
        wrap?: boolean | undefined;
        text: string;
    }, {
        color?: string | undefined;
        bold?: boolean | undefined;
        fontfamily?: string | undefined;
        halign?: "center" | "right" | "justify" | "left" | undefined;
        italic?: boolean | undefined;
        kerning?: boolean | undefined;
        pixelsize?: number | undefined;
        strikeout?: boolean | undefined;
        underline?: boolean | undefined;
        valign?: "center" | "bottom" | "top" | undefined;
        wrap?: boolean | undefined;
        text: string;
    }>>;
    type: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type?: string | undefined;
    class?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    properties?: ({
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    } | {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    } | {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    })[] | undefined;
    text?: {
        color?: string | undefined;
        bold?: boolean | undefined;
        fontfamily?: string | undefined;
        halign?: "center" | "right" | "justify" | "left" | undefined;
        italic?: boolean | undefined;
        kerning?: boolean | undefined;
        pixelsize?: number | undefined;
        strikeout?: boolean | undefined;
        underline?: boolean | undefined;
        valign?: "center" | "bottom" | "top" | undefined;
        wrap?: boolean | undefined;
        text: string;
    } | undefined;
    ellipse?: boolean | undefined;
    gid?: number | undefined;
    point?: boolean | undefined;
    polygon?: {
        x: number;
        y: number;
    }[] | undefined;
    polyline?: {
        x: number;
        y: number;
    }[] | undefined;
    rotation?: number | undefined;
    template?: string | undefined;
    name: string;
    x: number;
    y: number;
    id: number;
    visible: boolean;
}, {
    type?: string | undefined;
    class?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    properties?: ({
        value?: string | undefined;
        propertytype?: string | undefined;
        type: "string" | "color" | "file";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "object" | "int";
        name: string;
    } | {
        value?: number | undefined;
        propertytype?: string | undefined;
        type: "float";
        name: string;
    } | {
        value?: boolean | undefined;
        propertytype?: string | undefined;
        type: "bool";
        name: string;
    } | {
        value?: import("./ITiledMapProperty").Json | undefined;
        propertytype?: string | undefined;
        type: "class";
        name: string;
    })[] | undefined;
    text?: {
        color?: string | undefined;
        bold?: boolean | undefined;
        fontfamily?: string | undefined;
        halign?: "center" | "right" | "justify" | "left" | undefined;
        italic?: boolean | undefined;
        kerning?: boolean | undefined;
        pixelsize?: number | undefined;
        strikeout?: boolean | undefined;
        underline?: boolean | undefined;
        valign?: "center" | "bottom" | "top" | undefined;
        wrap?: boolean | undefined;
        text: string;
    } | undefined;
    ellipse?: boolean | undefined;
    gid?: number | undefined;
    point?: boolean | undefined;
    polygon?: {
        x: number;
        y: number;
    }[] | undefined;
    polyline?: {
        x: number;
        y: number;
    }[] | undefined;
    rotation?: number | undefined;
    template?: string | undefined;
    name: string;
    x: number;
    y: number;
    id: number;
    visible: boolean;
}>;
export declare type ITiledMapObject = z.infer<typeof ITiledMapObject>;
