import {FieldType} from "../../../core/model/field/FieldType";
import {FarmlandPopupComponent} from "./field-popup/farmland-popup/farmland-popup.component";
import {FarmerPopupComponent} from "./field-popup/farmer-popup/farmer-popup.component";
import {WaterChannelPopupComponent} from "./field-popup/water-channel-popup/water-channel-popup.component";
import {RockPopupComponent} from "./field-popup/rock-popup/rock-popup.component";
import {WaterSourcePopupComponent} from "./field-popup/water-source-popup/water-source-popup.component";
import {SiloPopupComponent} from "./field-popup/silo-popup/silo-popup.component";
import {BuildingType} from "../../../core/model/field/BuildingType";

export const PopupTypes = new Map<FieldType, any>();
PopupTypes.set(FieldType.FARMLAND, FarmlandPopupComponent)
PopupTypes.set(FieldType.ROCK, RockPopupComponent)
PopupTypes.set(FieldType.WATER_SOURCE, WaterSourcePopupComponent)

export const PopupTypesByBuilding = new Map<BuildingType, any>();
PopupTypesByBuilding.set(BuildingType.FARM, FarmerPopupComponent);
PopupTypesByBuilding.set(BuildingType.WATER_CHANNEL, WaterChannelPopupComponent);
PopupTypesByBuilding.set(BuildingType.SILO, SiloPopupComponent);
PopupTypesByBuilding.set(BuildingType.BARRACK, null);
