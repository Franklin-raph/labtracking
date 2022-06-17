const Laboratory = require('../models/laboratoryModel')
const ReportLab = require('../models/reportLabIssue')

// Register lab record
const registerLab = async (req, res) => {
    try {
        const { name, buildingNumber, floorNumber, numberOfPC, capacity, numberOfChairs, status } = req.body
        let laboratory = new Laboratory({
            name, buildingNumber, floorNumber, numberOfPC, capacity, numberOfChairs, status
        })
        console.log(laboratory)
        await laboratory.save()
        res.send("Saved to db")
    } catch (error) {
        console.log("Error")
        res.status(500).send("Server Error")
    }
}

// Get all laboratory
const getLabs = async (req, res) => {
    try {
        let labRecords = await Laboratory.find().sort({ createdAt: -1 })
        console.log(labRecords)
        res.status(200).json(labRecords)
    } catch (error) {
        console.log("Error")
        res.status(500).send("Server Error")
    }
}

// Get all laboratory issues
const getLabsIssues = async (req, res) => {
    try {
        let labRecords = await ReportLab.find().sort({ createdAt: -1 })
        console.log(labRecords)
        res.status(200).json(labRecords)
    } catch (error) {
        console.log("Error")
        res.status(500).send("Server Error")
    }
}

// Update lab record
const updateLabInfo = async (req, res) => {
    try {
        Laboratory.findById(req.params.id)
        .then(result => {
            result.name = req.body.name,
            result.buildingNumber = req.body.buildingNumber,
            result.floorNumber = req.body.floorNumber,
            result.numberOfPC = req.body.numberOfPC,
            result.capacity = req.body.capacity,
            result.numberOfChairs = req.body.numberOfChairs,
            result.status = req.body.status,
    
            result.save()
            res.status(200).json({ result })
        })
    } catch (error) {
        console.log("Error")
        res.status(500).json({errMsg:"Server Error"})
    }
}

// view or Search for a lab by its id
const searchLab = async (req, res) => {
    try {
        let labRecord = await Laboratory.findById(req.params.id)
        console.log(labRecord)
        res.status(200).json(labRecord)
    } catch (error) {
        console.log("Error")
        res.status(500).json({errMsg:"Server Error"})
    }
}

// Delete lab record
const deleteLab = async (req, res) => {
    try {
        let labRecord = await Laboratory.findById(req.params.id)
        console.log(labRecord)

        await labRecord.remove()
        res.status(200).json({msg: "Lab record was removed successfully"})
    } catch (error) {
        console.log("Error")
        res.status(500).json({errMsg:"Server Error"})
    }
}

// Report a lab issue
const reportLabIssue = async (req, res) => {
    try {
        const { laboratoryId, numberOfPC, problemDescrition, problemType, dateOfOccurence } = req.body
        let reportLaboratory = new ReportLab({
            laboratoryId, numberOfPC, problemDescrition, problemType, dateOfOccurence
        })
        console.log(reportLaboratory)
        await reportLaboratory.save()
        res.send("Saved reportLaboratory to db")
    } catch (error) {
        console.log("Error")
        res.status(500).send("Server Error")
    }
}

// Methods exports
module.exports = {
    registerLab,
    updateLabInfo,
    deleteLab,
    getLabs,
    searchLab,
    reportLabIssue,
    getLabsIssues
}