import {Component, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Field} from "../../../../core/model/field/Field";
import {FieldType} from "../../../../core/model/field/FieldType";
import {FieldPopupDirective} from "../../../core/directive/field-popup.directive";
import {FieldPopup} from "./field-popup.interface";
import {PopupTypes, PopupTypesByBuilding} from "../popup-types.content";
import {BuildingType} from "../../../../core/model/field/BuildingType";
import {BuildingOffer} from "../../../../core/model/economy/BuildingOffer";

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
        if (this.field.buildingType !== undefined) {
            this.componentRef = viewRef.createComponent<FieldPopup>(
                PopupTypesByBuilding.get(this.field.buildingType));
        } else {
            this.componentRef = viewRef.createComponent<FieldPopup>(PopupTypes.get(this.field.fieldType));
        }
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
    protected readonly BuildingType = BuildingType;
    protected readonly BuildingOffer = BuildingOffer;
}
