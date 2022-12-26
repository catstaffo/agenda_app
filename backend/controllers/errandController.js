const { response } = require("express");
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

// get singular errand
const getErrand = async(req, res) => {
    try {
        const {id} = req.params;
        const errand = await Errand.findById(id);
        // if errand not found in database
        if (!errand) {
            // yeet 404 error
            return res.status(404).json(`Invalid Errand Id ${id}`)
        }
        res.status(200).json(errand);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

// Delete errand
const deleteErrand = async (req, res) => {
    try {
        const {id} = req.params;
        // ANYTHING YOU DO INSIDE DB IS THRU MODEL
        const errand = await Errand.findByIdAndDelete(id);
        if (!errand) {
            // yeet 404 error
            return res.status(404).json(`Invalid Errand Id ${id}`);
        }
        res.status(200).send("Errand deleted");
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }
};

module.exports = {
    createErrand,
    getErrands,
    getErrand,
    deleteErrand
}
