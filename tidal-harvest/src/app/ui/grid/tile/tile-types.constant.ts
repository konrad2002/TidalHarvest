import {FieldType} from "../../../core/model/field/FieldType";
import {FarmlandComponent} from "./farmland/farmland.component";
import {FarmerComponent} from "./farmer/farmer.component";
import {RockComponent} from "./rock/rock.component";
import {WaterChannelComponent} from "./water-channel/water-channel.component";
import {SiloComponent} from "./silo/silo.component";
import {WaterSourceComponent} from "./water-source/water-source.component";

export const TileTypes: Map<string, any> = new Map<string, any>();
TileTypes.set("FARMLAND", FarmlandComponent)
TileTypes.set("FARMER", FarmerComponent)
TileTypes.set("ROCK", RockComponent)
TileTypes.set("WATER_CHANNEL", WaterChannelComponent)
TileTypes.set("WATER_SOURCE", WaterSourceComponent)
TileTypes.set("SILO", SiloComponent)
