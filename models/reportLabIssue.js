const mongoose = require('mongoose')

const ReportLabIssue = mongoose.Schema({
    laboratoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'labModel'
    },
    numberOfPC: {
        type: Number,
        required: true
    },
    problemDescrition : {
        type: String,
        required: true
    },
    problemType:{
        type: String,
        required: true
    },
    dateOfOccurence : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('reportLabIssueModel', ReportLabIssue)