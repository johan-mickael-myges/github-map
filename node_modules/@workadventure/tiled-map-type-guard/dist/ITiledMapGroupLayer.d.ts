import { z } from 'zod';
import { ITiledMapProperty } from './ITiledMapProperty';
import { ITiledMapLayer } from './ITiledMapLayer';
interface TiledMapGroupLayerOptional {
    height: number;
    draworder: string;
    id: number;
    class: string;
    offsetx: number;
    offsety: number;
    parallaxx: number;
    parallaxy: number;
    properties: ITiledMapProperty[];
    startx: number;
    starty: number;
    tintcolor: string;
    width: number;
    x: number;
    y: number;
}
export interface TiledMapGroupLayer extends Partial<TiledMapGroupLayerOptional> {
    opacity: number;
    name: string;
    visible: boolean;
    type: 'group';
    layers: ITiledMapLayer[];
}
export declare const ITiledMapGroupLayer: z.ZodType<TiledMapGroupLayer>;
export declare type ITiledMapGroupLayer = z.infer<typeof ITiledMapGroupLayer>;
export {};
