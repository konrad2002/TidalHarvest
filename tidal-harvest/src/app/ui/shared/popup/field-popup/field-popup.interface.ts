import {Field} from "../../../../core/model/field/Field";

export interface FieldPopup {
    field: Field;
    getTitle(): string;
}
