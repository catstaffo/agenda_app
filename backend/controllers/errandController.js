const Errand = require("../models/errandModel");

// create an errand
const createErrand = async (req, res) => {
    try {
        const errand = await Errand.create(req.body);
        res.status(200).json(errand);
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
};

// get all errands
const getErrands = async(req, res) => {
    try {
        // find something from db
        // leaving empty so it brings ALL data
        const errands = await Errand.find();
        res.status(200).json(errands);
    } catch (error) {
        // error.message comes from (error) obj
        res.status(500).json({msg:error.message});
    }
};


module.exports = {
    createErrand,
    getErrands
}
