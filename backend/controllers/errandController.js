const { response } = require("express");
const Errand = require("../models/errandModel");

// create an errand
const createErrand = async (req, res) => {
    try {
        const errand = await Errand.create(req.body);
        res.status(200).json(errand);
    } catch (error) {
        res.status(500).json({msg: error.message});
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
        res.status(500).json({msg: error.message});
    }
};

// update errand
const updateErrand = async (req, res) => {
    try {
        // destructure id we get from req.params
        const {id} = req.params;
        // to interact w db, must go through model
        // findById is mongoose function
        const errand = await Errand.findByIdAndUpdate(
            // in api, the id field is named _id
            // the following sets the id and points it to what is coming from the params, this is first argument we give this
            // req.body is second argument we give it
            // last piece of info is an object: new entry into database
            {_id: id}, req.body, {
                new: true,
                // if we want the model's validation to run, then we MUST SPECIFY this
                runValidators: true
            });
            // if errand id does not exist:
            if (!errand) {
                return res.status(404).json(`No errand with id: ${id}`)
            }
        // 200 if successful, then json to return errand data back to user
        res.status(200).json(errand);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

module.exports = {
    createErrand,
    getErrands,
    getErrand,
    deleteErrand,
    updateErrand
}
