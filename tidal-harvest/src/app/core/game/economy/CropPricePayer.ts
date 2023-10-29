import {Price} from "../../model/economy/Price";
import {Matrix} from "../../model/Matrix";
import {SiloSelector} from "../SiloSelector";
import {CropKey} from "../../model/field/farm/crop/CropKey";
import {Silo} from "../../model/field/farm/Silo";

export class CropPricePayer {

    private readonly siloSelector = new SiloSelector();

    public pay(price: Price, matrix: Matrix) {
        for (let cropAmount of price.price) {
            const silos = this.findByCropType(cropAmount.cropKey, matrix);

            let remaining = cropAmount.amount;
            while (remaining > 0) {
                const randomElement: Silo = silos[Math.floor(Math.random() * silos.length)];
                if (randomElement.current == 1) {
                    randomElement.current = 0;
                    remaining--;

                    const index = silos.indexOf(randomElement, 0);
                    if (index > -1) {
                        silos.splice(index, 1);
                    }
                    continue;
                }
                if (randomElement.current > 0) {
                    randomElement.current--;
                    remaining--;
                    continue;
                }
                new Error("you didnt have the money :(")
            }

        }
    }

    private findByCropType(cropKey: CropKey, matrix: Matrix): Silo[] {
        const result: Silo[] = [];
        for (let silo of this.siloSelector.findAllSilos(matrix)) {
            if (silo.cropKey === cropKey) {
                result.push(silo);
            }
        }
        return result;
    }

}
