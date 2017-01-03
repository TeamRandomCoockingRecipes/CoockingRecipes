/* globals module */
"use strict";

const User = require("../models/user-model");
const passport = require("passport");

module.exports = function() {
    return {
        postLogin(req, res, next) {
            console.log("in postLogin: req.body ", req.body); // to delete

            req.assert("email", "Невалиден Email адрес!!!").isEmail();
            req.assert("password", "Паролата не може да е празна!!!").notEmpty();
            req.sanitize("email").normalizeEmail({
                remove_dots: false
            });
            const errors = req.validationErrors();

            console.log("in postLogin:  errors: ", errors); // to delte

            if (errors) {
                console.log("in postLogin: is in errors -----"); // da se iztrie
                req.flash("errors", errors);
                return res.redirect("/login");
            }

            passport.authenticate("local", (err, user, info) => {
                console.log("in postLogin: passport lockal err:   ", err);
                console.log("in postLogin: passport lockal user:   ", user);
                console.log("in postLogin: passport lockal info:   ", info);

                if (err) {
                    return next(err);
                }

                if (!user) {
                    req.flash("errors", info);
                    // return res.redirect("/login");
                    console.log("authenticate:   ", new Error(info.msg));
                    return res
                        .status(404)
                        .json();
                }

                req.logIn(user, (err) => {
                    if (err) {
                        console.log("in postLogin: passport lockal: logIn: err", err); // da se iztrie
                        return next(err);
                    }

                    console.log("in postLogin: passport lockal: logIn: niama err: user", user); // da se iztrie
                    req.flash("success", {
                        msg: "Успешно логване в системата!!!"
                    });
                    // res.redirect(req.session.returnTo || "/profile");
                    // return res.json(user);
                    return res.json({
                        mail: user.email,
                        id: user._id
                    });
                });
            })(req, res, next);
        },
        logout(req, res) {
            req.logout();
            req.flash("success", {
                msg: "Успешно отписване от системата!!!"
            });
        },
        // getSignup(req, res) {  // triabva da se iztrie
        //     if (req.user) {
        //         return res.redirect("/");
        //     }
        //     res.send({
        //         title: "Create Account"
        //     });
        // },


        // Registation
        postSignup(req, res, next) {
            console.log("controler postSignup:  ", req.body); // da se iztrie

            req.assert("email", "Невалиден Email адрес!").isEmail();
            req.assert("password", "Паролата трябва да бъде минимум 4 символа дълга!").len(4);
            req.assert("confirmPassword", "Паролите не съвпадат!").equals(req.body.password);
            req.sanitize("email").normalizeEmail({
                remove_dots: false
            });

            const errors = req.validationErrors();

            console.log("controler postSignup: errors ", errors); // da se iztrie

            if (errors) {
                return req.flash("errors", errors);
                // return res.redirect("/register");
            }

            console.log("--------is before create user");
            let params = JSON.stringify({
                email: req.body.email,
                password: req.body.password
            });
            console.log("params:   ", params);
            // const user = new User({
            //     email: req.body.email,
            //     password: req.body.password
            // });

            const user = new User({
                email: req.body.email,
                password: req.body.password
            });
            // user.email = req.body.email;
            // user.password = req.body.password;

            // console.log("controler postSignup: newUser:  ", user); // da se iztrie

            User.findOne({
                email: req.body.email
            }, (err, existingUser) => {
                if (err) {
                    console.log("controler postSignup: user findOne: err", err); // da se iztrie
                    return next(err);
                }

                if (existingUser) {
                    console.log("controler postSignup: user findOne: existingUser:", existingUser); // da se iztrie
                    req.flash("errors", {
                        msg: "Акаунт с този Email адрес вече съществува!!!."
                    });
                    // return res.redirect("/register");
                }

                user.save((err) => {
                    if (err) {
                        console.log("controler postSignup: user findOne: save: err", err); // da se iztrie
                        return next(err);
                    }

                    console.log("controler postSignup: user findOne: save: is saved", user); // da se iztrie

                    req.logIn(user, (err) => {
                        if (err) {
                            return next(err);
                        }

                        req.flash("success", {
                            msg: "Успешна регистрация!!!"
                        });

                        // return res.json(user);
                        return res.json({
                            mail: user.email,
                            id: user._id
                        });
                    });

                });
            });
        }
    };
};