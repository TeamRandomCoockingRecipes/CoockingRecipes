/* globals require module */
"use strict";

const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Article", {
    title: {
        type: String,
        required: true,
        unique: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});