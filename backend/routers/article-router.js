/* globals module require */
"use strict";

const express = require("express");
let Router = express.Router;

module.exports = function({
    app,
    data
}) {
    let controller = require("../controllers/article-controler")(data);

    let router = new Router();

    router
        .get("/", controller.getAllArticles)
        .post("/", controller.createArticle)
        .get("/:id", controller.getArticleById)
        .put("/edit", controller.editArticleById);

    // .get("/newest", controller.getNewestArticlesAjax)

    app.use("/api/articles", router);

    return router;
};