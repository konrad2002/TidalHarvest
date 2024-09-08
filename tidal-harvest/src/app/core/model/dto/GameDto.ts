import {MatrixDto} from "./MatrixDto";

export interface GameDto {
    id: number
    timeSinceStart: number
    board: MatrixDto
    paused: boolean
}
