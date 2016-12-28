/* globals module require Promise */
"use strict";

const dataUtils = require("./utils/data-utils");

const MIN_PATTERN_LENGTH = 3;

module.exports = function(models) {
    let {
        Article
    } = models;

    return {
        createArticle(title, imgUrl, content) {
            if (3 > title.length || title.length > 50) {
                console.log("--------------ïnvalid title length.", title.length);
                return Promise.reject({
                    reason: "Title must be between 3 and 50 characters long."
                });
            }

            if (3 > imgUrl.length) {
                console.log("--------------ïnvalid imgUrl length.", imgUrl.length);
                return Promise.reject({
                    reason: "Image url must be bigger than 3 charecters long."
                });
            }

            if (3 > content.length || content.length > 10000) {
                console.log("--------------ïnvalid content length.", content.length);
                return Promise.reject({
                    reason: "Content length must be between 3 and 10000 characters long."
                });
            }

            let article = new Article({
                title,
                imgUrl,
                content
            });

            return new Promise((resolve, reject) => {
                article.save(err => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(article);
                });
            });
        },
        getAllArticles() {
            return new Promise((resolve, reject) => {
                Article
                    .find()
                    .where("isDeleted").equals(false)
                    .exec((err, articles) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(articles);
                    });
            });
        },
        getArticleById(id) {
            return new Promise((resolve, reject) => {
                Article.findOne({
                    _id: id
                }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!article || article.isDeleted) {
                        return resolve(null);
                    }

                    return resolve(article || null);
                });
            });
        },
        getNewestArticles(count) {
            return new Promise((resolve, reject) => {
                Article.find({})
                    .sort({
                        createdAt: -1
                    })
                    .limit(count)
                    .exec((err, articles) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(articles);
                    });
            });
        },
        editArticleById(id, title, imgUrl, content) {
            return new Promise((resolve, reject) => {
                Article.findByIdAndUpdate(id, {
                    title,
                    imgUrl,
                    content
                }, {
                    safe: true,
                    new: true
                },
                    (err, recipe) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(recipe);
                    });
            });
        },
        deleteArticle() {
            
        }
    };
};