const db = require("../models");
const Customer = db.customers;

// create and save a Customer
exports.create = (req, res) => {
    // create Claim
    const customer = new Customer({
        first_name: req.body.first_name ? req.body.first_name : '',
        middle_name: req.body.middle_name ? req.body.middle_name : '',
        last_name: req.body.last_name ? req.body.last_name : '',
        phone: req.body.phone ? req.body.phone : '',
        email: req.body.email ? req.body.email : '',
        notes: req.body.notes ? req.body.notes : null,
        address_line1: req.body.address_line1 ? req.body.address_line1 : '',
        address_line2: req.body.address_line2 ? req.body.address_line2 : '',
        apartment_number: req.body.apartment_number ? req.body.apartment_number : '',
        city: req.body.city ? req.body.city : '',
        state: req.body.state ? req.body.state : '',
        zip: req.body.zip ? req.body.zip : '',
    });

    // save Claim to dB
    customer
        .save(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while creating Customer"
            });
        })
};

// get all claims
exports.findAll = (req, res) => {
    const notes = req.query.notes;
    var condition = notes ? { notes: { $regex: new RegExp(notes), $options: "i" }} : {}
    Claim.find(condition)
        .then(data => {
            res.send("got all")//res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while retreving Claims"
            });
        });
};


// get Claim by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Claim.findById(id)
        .then(data => {
            if(!data)
                res.status(404).send({ message: "Not found: Claim with id of " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retreiving Claim with id of " + id });
        });
};

// update Claim by id
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Empty data for update"
        });
    }

    const id = req.params.id;

    Claim.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Unable to update Claim with id of ${id}.`
                });
            } else res.send({ message: "Claim updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while trying to update Claim with id of " + id
            });
        });
};

// delete Claim by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Claim.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Unable to delete Claim with id of ${id}.`
                });
            } else {
                res.send({
                    message: "Claim deleted successfully."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Unable to delete Claim with id of " + id
            });
        });
};

// delete all Claims
exports.deleteAll = (req, res) => {
    Claim.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Claims were deleted successfully.`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "An error occurred while attempting to delete all Claims"
            });
        });
};

// get all active Policies
exports.findAllActive = (req, res) => {
    Policy.find({ is_active_policy: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving active Policies"
            });
        });
};