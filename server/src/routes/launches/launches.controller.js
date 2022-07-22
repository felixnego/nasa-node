import {
    getAllLaunches,
    addNewLaunch,
    existsLaunch,
    deleteLaunch
} from "../../models/launches.model.js";


export function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

export function httpAddNewLaunch(req, res) {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

export function httpDeleteLaunch(req, res) {
    const id = parseFloat(req.params.id);
    if (!existsLaunch(id)) {
        return res.status(404).json({
            error: "Launch not found"
        })
    }
    const aborted = deleteLaunch(id);
    return res.status(200).json(aborted);
}