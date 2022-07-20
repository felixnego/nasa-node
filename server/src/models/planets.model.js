import { parse } from "csv-parse";
import fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const PLANETS = [];

/**
 * @param {
 * {
 * koi_disposition:string,
 * koi_insol:string,
 * koi_prad: string
 * }
 * } planet
 */
function isHabitablePlanet(planet) {
    return planet.koi_disposition === 'CONFIRMED'
        && planet.koi_insol > 0.36 && planet.koi_insol < 1.11
        && planet.koi_prad < 1.6;
}

export function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true,
            }))  //returns a stream as a result
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    PLANETS.push(data);
                }
            })
            .on('error', (error) => {
                reject(error);
            })
            .on('end', () => {
                console.log('Completed reading file. Results below:');
                console.log(`${PLANETS.length} habitable planets found!`);
                resolve();
            });
    })
}

