const mongoose = require('mongoose')

const AddPc = mongoose.Schema({
    laboratoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'labModel'
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('addPc', AddPc)