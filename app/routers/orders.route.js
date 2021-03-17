module.exports = app => {
    const controller = require("../controllers/orders.controller");

    var router = require("express").Router();

    // Endpoint: GET on api/orders/ 
    // Get all orders
    router.get("/", controller.getAll);

    // Endpoint: GET on api/orders/:id 
    // Get one order
    router.get('/:id', controller.getOne);

    // Endpoint: PUT on api/orders/:id
    // Edit an order
    router.put('/:id', controller.editOrder)

    // Endpoint: POST on api/orders
    // Create an order
    router.post('/', controller.createOrder);

    // Endpoint: DELETE on api/orders/:id
    // Delete an order
    router.delete('/:id', controller.deleteOrder);

    app.use("/api/orders", router);
};
