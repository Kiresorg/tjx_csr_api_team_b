const { mongo } = require("mongoose");
const { mongoose } = require(".");

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            first_name: String,
            middle_name: Date,
            last_name: Date,
            phone: String,
            email: Number,
            notes: String,
            address_line1: Date,
            address_line2: String,
            apartment_number: String,
            city: String,
            state: String, 
            zip: int 
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Claim = mongoose.model("claim", schema);
    return Claim;
};