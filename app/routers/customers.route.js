module.exports = app => {
    const customers = require("../controllers/customers.controller");

    var router = require("express").Router();

    // create new Claim
    router.post("/", customers.create);

    // get all Claims
    router.get("/", customers.findAll);

    // get all active Claims
    router.get("/active", customers.findAllActive);

    // get Claim by id
    router.get("/:id", customers.findOne);

    // update Claim by id
    router.put("/:id", customers.update);

    // delete Claim by id
    router.delete("/:id", customers.delete);

    // delete all Claims
    router.delete("/", customers.deleteAll);

    app.use('/api/customers', router);
};