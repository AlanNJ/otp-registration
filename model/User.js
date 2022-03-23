const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const userSchema = new Schema(
	{
		number: {
			typeof: Number,
			required: true,
		},
		otp: {
			typeof: Number,
			required: true,
		},
	},
	{ timestamps: true },

	{
		createdAt: {
			typeof: Date,
			default: Date.now(),
		},
	}
);
module.exports = mongoose.exports("User", userSchema);
