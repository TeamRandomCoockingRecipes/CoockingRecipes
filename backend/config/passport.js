/* globals module require */
"use strict";

const passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    User = require("../models/user-model");

module.exports = function({ app, data }) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        User.findOne({ email: email.toLowerCase() }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { msg: `Email ${email} not found.` });
            }
            user.comparePassword(password, (err, isMatch) => {
                if (err) {
                    return done(err);
                }
                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, { msg: "Invalid email or password." });
            });
        });
    }));

    passport.serializeUser((user, done) => {
        if (user) {
            done(null, user.id);
        }
    });

    passport.deserializeUser((id, done) => {
        data.findUserById(id)
            .then(user => {
                if (user) {
                    return done(null, user);
                }

                return done(null, false);
            })
            .catch(error => done(error, false));
    });

    passport.isAuthenticated = function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        // res.redirect("/login");
    };
};