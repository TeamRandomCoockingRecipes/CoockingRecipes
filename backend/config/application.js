/* globals module require */
"use strict";

const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    session = require("express-session"),
    validator = require("express-validator"),
    flash = require("express-flash"),
    // expressStatusMonitor = require("express-status-monitor"),
    path = require("path");

module.exports = function({
    data
}) {
    let app = express();

    // app.set("view engine", "pug");
    // app.set("views", path.join(__dirname, "../views"));
    // app.use("/static", express.static(path.join(__dirname, "../public")));

    // app.use(expressStatusMonitor());
    // app.use("/static", express.static("public"));
    // app.use(cors());
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE");
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

    // test
    // app.get("/api/articles/test", (req, res) => {
    //     let articles = [{
    //         "title": "Leaf Rake",
    //         "content": "Leaf rake with 48-inch wooden handle.",
    //         "imgUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    //     }, {
    //         "title": "Garden Cart",
    //         "content": "15 gallon capacity rolling garden cart",
    //         "imgUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //     }];

    //     return res.send({
    //         result: articles
    //     });
    // });

    require("./passport")({
        app,
        data
    });


    return app;
};