const mongoose = require("mongoose");
const { Schema } = mongoose;

const otpSchema = new Schema({
	otp: {
		type: Number,
		required: true,
	},
});
module.exports = mongoose.model("Otp", otpSchema);
