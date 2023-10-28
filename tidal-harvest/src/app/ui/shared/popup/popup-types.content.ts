import {FieldType} from "../../../core/model/field/FieldType";
import {FarmlandComponent} from "../../grid/tile/farmland/farmland.component";
import {FarmerComponent} from "../../grid/tile/farmer/farmer.component";
import {RockComponent} from "../../grid/tile/rock/rock.component";
import {WaterChannelComponent} from "../../grid/tile/water-channel/water-channel.component";
import {FarmlandPopupComponent} from "./field-popup/farmland-popup/farmland-popup.component";

export const PopupTypes = new Map<FieldType, any>();
PopupTypes.set(FieldType.FARMLAND, FarmlandPopupComponent)
