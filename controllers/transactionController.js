const Transaction = require('../models/TransactionModel');

//Adding transaction
exports.addTransaction = async (req, res) => {
    const { amount, type, category, description, date} = req.body;
    try {
        const transaction = await Transaction.create({
            userId: req.user._id,
            amount, type, category, description, date
        });
        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add transaction', error: err });
    }
};


//Get all transaction for users
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user._id}).sort({ date: -1 });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch transactions', error: err });

    }
};


//Update Transaction
exports.updateTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await Transaction.findOneAndUpdate(
            {
                _id: id,
                userId: req.user._id
            },
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: 'Update Failed', error: err});
    }
};

//Deleting Transaction

exports.deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        await Transaction.findOneAndDelete({
            _id: id,
            userId: req.user._id
        });
        res.json({ message: 'Delete successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Delete Failed', error: err });
    }
};