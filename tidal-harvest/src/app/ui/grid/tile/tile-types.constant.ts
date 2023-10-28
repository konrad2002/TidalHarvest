import {Component} from "@angular/core";
import {FieldType} from "../../../core/model/field/FieldType";
import {FarmlandComponent} from "./farmland/farmland.component";
import {FarmerComponent} from "./farmer/farmer.component";
import {RockComponent} from "./rock/rock.component";

export const TileTypes = new Map<FieldType, any>();
TileTypes.set(FieldType.FARMLAND, FarmlandComponent)
TileTypes.set(FieldType.FARMER, FarmerComponent)
TileTypes.set(FieldType.ROCK, RockComponent)
