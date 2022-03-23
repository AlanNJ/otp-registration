const otp = require("../model/otp");
const User = require("../model/User");

const otpVerification = async (req, res) => {
	const otpHolder = await otp.find({
		number: req.body.number,
	});
	const latestOtp = otpHolder[otpHolder.length - 1].otp;
	if (req.body.otp === latestOtp) {
		const number = Number(req.body.number);
		const user = new User({ number });
		const result = await user.save();
		const deleteMany = await otp.deleteMany({
			number: req.body.number,
		});
		return res.status(200).send("Login Successfull");
	} else {
		res.json("wrong otp");
	}
};
module.exports = otpVerification;
