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
        .get("/:id", controller.getArticleById);

    // .get("/create", controller.getCreateArticleForm)
    // .get("/newest", controller.getNewestArticlesAjax)
    // .put("/edit", controller.getEditArticleForm)
    // .put("/edit/:id", controller.editArticleById)

    app.use("/api/articles", router);

    return router;
};