const express = require('express')
const { deleteTransaction, editTransaction, addTransaction, getAllTransaction } = require("../controllers/transactionCtrl")

// router object
const router = express.Router()

//routers
// add transaction POST METHOD
router.post('/add-transaction' , addTransaction)

// Edit transaction POST METHOD
router.post('/edit-transaction' , editTransaction)

// Delete transaction POST METHOD
router.post('/delete-transaction' , deleteTransaction)

//get trnsaction 
router.post('/get-transaction', getAllTransaction)

module.exports = router
