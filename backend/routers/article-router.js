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
        .get("/:id", controller.getArticleById)
        .post("/", controller.createArticle)
        .put("/edit", controller.editArticleById)
        .put("/delete", controller.deleteArticleById);

    // .get("/newest", controller.getNewestArticlesAjax)

    app.use("/api/articles", router);

    return router;
};