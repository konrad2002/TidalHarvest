import {FieldType} from "../../../core/model/field/FieldType";
import {FarmlandPopupComponent} from "./field-popup/farmland-popup/farmland-popup.component";
import {FarmerPopupComponent} from "./field-popup/farmer-popup/farmer-popup.component";
import {WaterChannelPopupComponent} from "./field-popup/water-channel-popup/water-channel-popup.component";
import {RockPopupComponent} from "./field-popup/rock-popup/rock-popup.component";

export const PopupTypes = new Map<FieldType, any>();
PopupTypes.set(FieldType.FARMLAND, FarmlandPopupComponent)
PopupTypes.set(FieldType.FARMER, FarmerPopupComponent)
PopupTypes.set(FieldType.WATER_CHANNEL, WaterChannelPopupComponent)
PopupTypes.set(FieldType.ROCK, RockPopupComponent)
