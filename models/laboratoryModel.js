const mongoose = require('mongoose')

const LaboratorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    buildingNumber: {
        type: String,
        required: true
    },
    floorNumber: {
        type: String,
        required: true
    },
    numberOfPC: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    numberOfChairs: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
}, {timestamps: true} )

module.exports = mongoose.model('labModel', LaboratorySchema)