const express = require('express')
const router = express.Router();
const { registerLab, updateLabInfo, deleteLab, getLabs, searchLab, reportLabIssue, getLabsIssues } = require('../controllers/labcontroller')

router.post('/registerLab', registerLab)
router.get('/allLabRecords', getLabs)
router.get('/allLabIssues', getLabsIssues)
router.post('/reportLab', reportLabIssue)
router.put('/updateLab/:id', updateLabInfo)
router.delete('/deleteLab/:id', deleteLab)
router.post('/search/:id', searchLab)

module.exports = router