const db = require("../models");
const Order = db.orders;
const mySQLdatetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

// create an order
exports.createOrder = (req, res) => {

    // Testing
    res.send("reached create new order")

    // // create Order
    // const order = new Order({
    //     customer_id: req.body.customer_id,
    //     order_status_code: req.body.order_status_code ? req.body.order_status_code : '',
    //     datetime_order_placed: mySQLdatetime,
    //     total_order_price: req.body.total_order_price ? req.body.total_order_price : '',
    //     order_notes: req.body.order_notes ? req.body.order_notes : '',
    // });


    // // save Order to dB
    // order
    //     .save(order)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Error while creating Order"
    //         });
    //     })
};

// get all orders
exports.getAll = (req, res) => {

    // Testing
    res.send("reached get all orders");

    // const notes = req.query.notes;
    // var condition = notes ? { notes: { $regex: new RegExp(notes), $options: "i" }} : {}
    // Order.find(condition)
    //     .then(data => {
    //         res.send("got all")//res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Error while retreving Orders"
    //         });
    //     });
};

// Delete an order from ID
exports.deleteOrder = (req, res) => {
    const id = req.params.id;
    res.send("reached delete order by id");
    /*
    Order.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Unable to delete Order with id of ${id}.`
                });
            } else {
                res.send({
                    message: "Order deleted successfully."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Unable to delete Order with id of " + id
            });
        });
        */
};

// Get one order from ID
exports.getOne = (req, res) => {
    const id = req.params.id;
    res.send("reached get order by id");
    /**
    Order.findById(id)
        .then(data => {
            if(!data)
                res.status(404).send({ message: "Not found: Order with id of " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retreiving Order with id of " + id });
        });
         */
};

// Edit an order from ID
exports.editOrder = (req, res) => {
    res.send('Reached update order by id');
    /*if(!req.body) {
        return res.status(400).send({
            message: "Empty data for update"
        });
    }
    const id = req.params.id;
    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Unable to update Order with id of ${id}.`
                });
            } else res.send({ message: "Order updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while trying to update Order with id of " + id
            });
        });
        */
};