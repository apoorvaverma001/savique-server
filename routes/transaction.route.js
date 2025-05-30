const express = require('express');
const protect = require('../middlewares/authMiddleware');
const {
    addTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction
} = require('../controllers/transaction.controller');

const router = express.Router();

router.post('/', protect, addTransaction);
router.get('/', protect, getTransactions);
router.put('/:id', protect, updateTransaction);
router.delete('/:id', protect, deleteTransaction);