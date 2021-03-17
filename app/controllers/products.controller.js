const db = require("../models");
const Product = db.products;

// create and save a Product
exports.create = (req, res) => {
    // create Product
    const product = new Product({
        SKU: req.body.SKU ? req.body.SKU : '',
        unit_price: req.body.unit_price ? req.body.unit_price : '',
        name: req.body.name ? req.body.name : '',
        quantity: req.body.quantity ? req.body.quantity : '',
        description: req.body.description ? req.body.description : ''
    });

    // save Product to dB
    product
        .save(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while creating product"
            });
        })
};

//get all products
exports.findAll = (req, res) => {
    const adjustor_notes = req.query.adjustor_notes;
    var condition = adjustor_notes ? { adjustor_notes: { $regex: new RegExp(adjustor_notes), $options: "i" }} : {}

    Product.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while retreving Product"
            });
        });
};

//get one product by SKU
exports.findOne = (req, res) => {
    const SKU = req.params.id;

    Product.findById(SKU)
        .then(data => {
            if(!data)
                res.status(404).send({ message: "Not found: Product with SKU of " + SKU });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retreiving Product with SKU of " + SKU });
        });
};

//increment/decrement product quantity
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Empty data for update"
        });
    }

    const SKU = req.params.SKU;

    Product.findBySKUAndUpdate(SKU, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Unable to update Product with SKU of ${SKU}.`
                });
            } else res.send({ message: "Successfully updated Product." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while trying to update Product with SKU of " + SKU
            });
        });
};
