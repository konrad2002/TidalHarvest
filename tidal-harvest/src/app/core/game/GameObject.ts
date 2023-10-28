import {Matrix} from "../model/Matrix";

export interface GameObject {

    tick(matrix: Matrix, tick: number): boolean;

    invalidate(): void;

}
