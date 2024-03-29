const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const path = require("path");

const jwtRequired = passport.authenticate("jwt", { session: false });

const router = express.Router();const dotenv = require("dotenv");

// setup .env config
dotenv.config({path: path.resolve(__dirname, ".env")});

router.get("/login", passport.authenticate("auth0", {
	scope: "openid email profile",
}),
(req, res) => {
	res.redirect("/");
}
);

router.get("/callback", (req, res, next) => {
	passport.authenticate("auth0", (err, user) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.redirect("/login");
		}
		console.log("CALLBACK SUCCESSFUL");
		const userReturnObject = {
			nickname: user.nickname,
		};
		req.session.jwt = jwt.sign(userReturnObject, process.env.JWT_SECRET_KEY);
		return res.redirect("/");
	})(req, res, next);

});

router.get("/current-session", (req, res) => {
	passport.authenticate("jwt", { session: false }, (err, user) => {
		if (err || !user) {
			res.send(false);
		} else {
			res.send(user);
		}
	})(req, res);
});

router.get("/logout", (req, res) => {
	req.session = null;
	const homeURL = encodeURIComponent(process.env.REACT_APP_HOST);
	res.redirect(
		`https://${process.env.AUTH0_DOMAIN}/v2/logout?returnTo=${homeURL}&client_id=${process.env.AUTH0_CLIENT_ID}`
	);
});

module.exports = router;