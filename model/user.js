const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    city: {
        type: String
    },
    status: {
        type: String
    },
    exp: {
        type: String
    },
    link: {
        type: String
    },
    plateform: {
        type: String
    },
    plateform_link: {
        type: String
    }
},{
    timestamps: true // This option adds 'createdAt' and 'updatedAt' fields to your schema
});

const User = mongoose.model("User", UserSchema);

module.exports = User;