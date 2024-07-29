const Appeal = require('./apppealSchema'); 

// Add a new appeal
const addPolicy = (req, res) => {
    const appeal = new Appeal({
        advId: req.params.id,
        reason: req.body.reason,
    });

    appeal
        .save()
        .then((data) => {
            res.json({
                status: 200,
                message: 'Appeal added successfully',
                data: data,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error adding appeal',
                error: err,
            });
        });
};

// View all pending appeals
const viewAllPendingAppeals = (req, res) => {
    Appeal
        .find({status:'Pending'})
        .populate('advId')
        .exec()
        .then((appeals) => {
            res.status(200).json({
                status: 200,
                message: 'Appeals retrieved successfully',
                data: appeals,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error retrieving appeals',
                error: err,
            });
        });
};

// View an appeal by ID
const viewAppealById = (req, res) => {
    Appeal
        .findById(req.params.id)
        .populate('advId')
        .exec()
        .then((appeal) => {
            if (!appeal) {
                return res.status(404).json({
                    message: 'Appeal not found',
                });
            }
            res.status(200).json({
                status: 200,
                message: 'Appeal retrieved successfully',
                data: appeal,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error retrieving appeal',
                error: err,
            });
        });
};

// Delete an appeal by ID
const deleteAppealById = (req, res) => {
    Appeal
        .findByIdAndDelete(req.params.id)
        .exec()
        .then((appeal) => {
            if (!appeal) {
                return res.status(404).json({
                    message: 'Appeal not found',
                });
            }
            res.status(200).json({
                status: 200,
                message: 'Appeal deleted successfully',
                data: appeal,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error deleting appeal',
                error: err,
            });
        });
};

// View appeals by advocate ID
const viewAppealsByAdvId = (req, res) => {
    Appeal
        .find({ advId: req.params.id })
        .populate('advId')
        .exec()
        .then((appeals) => {
            res.status(200).json({
                status: 200,
                message: 'Appeals retrieved successfully',
                data: appeals,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error retrieving appeals',
                error: err,
            });
        });
};
// View appeals by advocate ID
const replyAppealsById = (req, res) => {
    Appeal
        .findByIdAndUpdate({ _id: req.params.id },{
            status:Reviewed,
            reply:req.body.reply
        })
        .populate('advId')
        .exec()
        .then((appeals) => {
            res.status(200).json({
                status: 200,
                message: 'Appeals retrieved successfully',
                data: appeals,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error retrieving appeals',
                error: err,
            });
        });
};
module.exports = {
    addAppeal,
    viewAllPendingAppeals,
    viewAppealById,
    deleteAppealById,
    viewAppealsByAdvId,
    replyAppealsById
};
