import {Field} from "./field/Field";
import {MatrixDto} from "./dto/MatrixDto";
import {TileDto} from "./dto/TileDto";
import {FieldType} from "./field/FieldType";

export class Matrix {

    private readonly _content: Field[][] = [];
    private readonly _x: number;
    private readonly _y: number;

    public constructor(dto: MatrixDto) {
        this._x = dto.xsize;
        this._y = dto.ysize;

        this._content = new Array(this._x).fill(new Array(this._y).fill(false))
        for (let i = 0; i < this.x; i++) {
            for (let j = 0; j < this.y; j++) {
                this.content[i][j] = this.parseField(dto.matrix[i][j]);
            }
        }
    }

    private parseField(dto: TileDto): Field {
        console.log("-------")
        console.log(dto);
        const fieldType: FieldType = dto.fieldType;
        console.log(fieldType);
        return new Field(fieldType, dto.x, dto.y);
    }

    get content(): Field[][] {
        return this._content;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}
