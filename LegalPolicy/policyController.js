const Policy = require('./policySchema'); 

// Add a new appeal
const addPolicy = (req, res) => {
    const appeal = new Policy({
        user: req.body.user,
        advocate: req.body.advocate,
    });

    appeal
        .save()
        .then((data) => {
            res.json({
                status: 200,
                message: 'Policy added successfully',
                data: data,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error adding Policy',
                error: err,
            });
        });
};

// View all  
const viewAllPolicy = (req, res) => {
    Appeal
        .findOne({type:'policy'})
      
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

const viewuserPolicy = (req, res) => {
    Appeal
        .findOne({type:'policy'},{user:1})
      
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

const viewadvocatePolicy = (req, res) => {
    Appeal
        .findOne({type:'policy'},{advocate:1})
      
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
// update an Policy by ID
const updatePolicyById = (req, res) => {
    Policy
        .findOneAndUpdate({type:'policy'},
            {
                user: req.body.user,
                advocate: req.body.advocate,
            }
        )
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

module.exports = {
   addPolicy,
   viewAllPolicy,
   updatePolicyById,
   viewadvocatePolicy,
   viewuserPolicy
};
