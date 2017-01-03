/* globals module require */
"use strict";

const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    session = require("express-session"),
    validator = require("express-validator"),
    flash = require("express-flash"),
    path = require("path");

module.exports = function({
    data
}) {
    let app = express();

    // app.use(cors());
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        next();
    });

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(validator());
    app.use(cookieParser());
    app.use(session({
        secret: "TeamFreedom Secretirino Yo",
        saveUninitialized: true,
        resave: true
    }));
    app.use(flash());

    require("./passport")({
        app,
        data
    });


    return app;
};