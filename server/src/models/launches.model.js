// The Model acts as a Repository layer
export const launches = new Map();

let latestFlightNumber = 100;

const exampleLaunch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

launches.set(exampleLaunch.flightNumber, exampleLaunch);

export function getAllLaunches() {
    return Array.from(launches.values());
}

export function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        upcoming: true,
        success: true,
        customers: ['ZTM', 'NASA'],
        flightNumber: latestFlightNumber,
    }));
}

export function existsLaunch(id) {
    return launches.has(id)
}

export function deleteLaunch(id) {
    // do not delete data
    const aborted = launches.get(id);
    aborted.upcoming = false;
    aborted.success = false;

    return aborted;
}