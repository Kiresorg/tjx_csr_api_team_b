const db = require("../models");
const Customer = db.customers;

// create and save a Customer
exports.create = (req, res) => {
    res.send("reached create new customer")
    // create customer
    /*const customer = new Customer({
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
        zip: req.body.zip ? req.body.zip : ''
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
        */
};

// get all claims
exports.findAll = (req, res) => {
    res.send("Reached get all customers");
    // const notes = req.query.notes;
    // var condition = notes ? { notes: { $regex: new RegExp(notes), $options: "i" }} : {}
    // Customer.find(condition)
    //     .then(data => {
    //         res.send("got all")//res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Error while retreving Claims"
    //         });
    //     });
};


// get Claim by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    res.send("reached get customer by id");
    /**
    Customer.findById(id)
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
         */
};

// update Customer by id
exports.update = (req, res) => {
    res.send('Reached update customer by id');
    /*if(!req.body) {
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
        */
};

// delete Claim by id
exports.delete = (req, res) => {
    const id = req.params.id;
    res.send("reached delete customer by id");
    /*
    Customer.findByIdAndRemove(id)
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
        */
};
