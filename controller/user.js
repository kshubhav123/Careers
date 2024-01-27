const User = require("../model/user");

exports.create = async (req, res) => {
    try {
        const { name, email, mobile, city,status,exp, link, plateform, plateform_link } = req.body;
        const user = await User({ name, email, mobile, city,status,exp, link, plateform , plateform_link}).save();
        return res.json({ user });
    } catch (e) {
        console.log(e);
    }
}

exports.list = async (req, res) => {
    try {
        const user = await User.find({}).exec();
        return res.json( user );
    } catch (e) {
        console.log(e);
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const { name, email, mobile, city,status,exp, link, plateform,plateform_link } = req.body;
        const user = await User.findByIdAndUpdate({ _id: id }, { name, email, mobile, city,status,exp, link, plateform,plateform_link }).exec();
        return res.json({ user });
    } catch (e) {
        console.log(e);
    }
}


exports.singleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById({ _id: id }).exec();
        return res.json(user);
    } catch (e) {
        console.log(e);
    }
}


exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete({ _id: id }).exec();
        return res.json({ user });
    } catch (e) {
        console.log(e);
    }
}

