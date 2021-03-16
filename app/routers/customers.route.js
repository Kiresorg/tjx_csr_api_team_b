module.exports = app => {
    const customers = require("../controllers/customers.controller");

    var router = require("express").Router();

    // create new customer
    router.post("/", customers.create);

    // get all customer
    router.get("/", customers.findAll);

    // get all active customer
    //router.get("/active", customers.findAllActive);

    // get customer by id
    router.get("/:id", customers.findOne);

    // update customer by id
    router.put("/:id", customers.update);

    // delete customer by id
    router.delete("/:id", customers.delete);

    app.use('/api/customers', router);
};