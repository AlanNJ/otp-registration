const User = require("../model/User");
const otpGenerator = require("otp-generator");
const Otp = require("../model/otp");

const registerUser = async (req, res) => {
	console.log(req.body.number);
	const user = await User.findOne({
		number: req.body.number,
	});
	if (user) res.status(400).send("User Already Exists");
	const otp = otpGenerator.generate(6, {
		digits: true,
		alphabets: false,
		upperCase: false,
		specialChars: false,
	});
	const number = req.body.number;
	const OTP = new Otp({ number: number, otp: otp });
	const result = await OTP.save();
	return res.status(200).send("Otp sent successfully");
};
module.exports = registerUser;
