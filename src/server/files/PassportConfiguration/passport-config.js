const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initializePassport(passport, getUserByEmail, getUserById) {
	const authenticate = async (email, password, done) => {
		const user = await getUserByEmail(email);
		if (user == null) {
			return done(null, false, { message: "Incorrect email!" });
		}
		try {
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user);
			} else {
				return done(null, false, { message: "Incorrect password" });
			}
		} catch (err) {
			return done(err);
		}
	};

	passport.use(
		new LocalStrategy(
			{ usernameField: "email", passwordField: "password" },
			authenticate
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser(async (id, done) => {
		const user = await getUserById(id);
		return done(null, user);
	});
}

module.exports = initializePassport;
