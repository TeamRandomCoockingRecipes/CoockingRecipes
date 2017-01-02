/* globals module require */
"use strict";

const express = require("express");
let Router = express.Router;

module.exports = function({
    app,
    data
}) {
    let controller = require("../controllers/category-controler")(data);

    let router = new Router();

    router
        .get("/", controller.getAllCategories)
        .get("/:id", controller.getCategoryById)
        .post("/", controller.createCategory)
        .put("/edit", controller.editCategoryById)
        .put("/delete", controller.deleteCategoryById);
    // .get("/newest", controller.getNewestCategoriesAjax)

    app.use("/categories/api", router);

    return router;
};