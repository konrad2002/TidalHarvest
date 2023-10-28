import {Component, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Field} from "../../../../core/model/field/Field";
import {FieldType} from "../../../../core/model/field/FieldType";
import {FieldPopupDirective} from "../../../core/directive/field-popup.directive";
import {FieldPopup} from "./field-popup.interface";
import {PopupTypes} from "../popup-types.content";

@Component({
  selector: 'th-field-popup',
  templateUrl: './field-popup.component.html',
  styleUrls: ['./field-popup.component.scss']
})
export class FieldPopupComponent implements OnInit {
    @Input() field!: Field;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild(FieldPopupDirective, {static: true}) thFieldPopup!: FieldPopupDirective;

    private componentRef?: ComponentRef<FieldPopup>;

    ngOnInit() {
        const viewRef = this.thFieldPopup.viewContainerRef;
        viewRef.clear();
        this.componentRef = viewRef.createComponent<FieldPopup>(PopupTypes.get(this.field.fieldType));
        this.componentRef.instance.field = this.field;
    }

    onClose() {
        this.close.emit();
    }

    getFieldName() {
        if (this.componentRef) {
            return this.componentRef.instance.getTitle();
        }
        return "Unbekanntes Kästchen"
    }

    protected readonly FieldType = FieldType;
}
