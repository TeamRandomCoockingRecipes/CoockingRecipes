/* globals module */
"use strict";

const NEWEST_ARTICLES_COUNT = 4;

module.exports = function(data) {
    return {
        createArticle(req, res) {
            // if (!req.isAuthenticated()) {
            //     return res.redirect("/");
            // }

            let {
                title,
                imgUrl,
                content
            } = req.body;

            return data.createArticle(title, imgUrl, content)
                .then(article => {
                    console.log("in create controler", article);
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        },
        getAllArticles(req, res) {
            data.getAllArticles()
                .then(articles => {
                    return res.send({
                        result: articles,
                        user: req.user
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        },
        getArticleById(req, res) {
            let id = req.params.id;

            return data.getArticleById(id)
                .then(article => {
                    return res.send({
                        result: article
                        // user: req.user
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        },
        getNewestArticlesAjax(req, res) {
            data.getNewestArticles(NEWEST_ARTICLES_COUNT)
                .then(articles => {
                    res.send({
                        result: articles
                    });
                });
        },
        editArticleById(req, res) {
            let {
                _id,
                title,
                imgUrl,
                content
            } = req.body;

            return data.editArticleById(_id, title, imgUrl, content)
                .then(article => {
                    return res.json({ article
                        // user: req.user
                    });
                });
        },
        deleteArticleById(req, res) {
            console.log("in article delete controler: req: ", req.body);

            let {
                _id,
                title,
                imgUrl,
                content
            } = req.body;

            return data.deleteArticle(_id, title, imgUrl, content)
                .then(article => {
                    console.log("in article delete response controler:  ", article);
                    return res.json({ 
                        article 
                        // user
                    });
                });
        }
    };
};