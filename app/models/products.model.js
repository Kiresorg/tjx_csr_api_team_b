const { INTEGER } = require("sequelize/types");

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            SKU: String,
            unit_price: String,
            name: String,
            quantity: INTEGER,
            description: String
        },
        { timestamps: true }
    );
    
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object._id = _id;
        return object;
    });
    
    const Product = mongoose.model("product", schema);
    return Product;
};