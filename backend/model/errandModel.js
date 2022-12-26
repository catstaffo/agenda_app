const mongoose = require("mongoose");

const errandSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, "Please create a name"]
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    },
    {
        timeStamps: true
    }
);

const Errand = mongoose.model("Errand", errandSchema);

module.exports = Task;
