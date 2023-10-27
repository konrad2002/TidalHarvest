import {Matrix} from "../model/Matrix";

export interface GameObject {

    tick(matrix: Matrix): boolean;

}
