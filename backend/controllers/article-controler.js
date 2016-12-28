/* globals module */
"use strict";

const NEWEST_ARTICLES_COUNT = 4;

module.exports = function(data) {
    return {
        createArticle(req, res) {
            // if (!req.isAuthenticated()) {
            //     return res.redirect("/");
            // }
            console.log("--------->> in createArticle: req: ", req.body);

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
            console.log("----- in controler");
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

            // let articles = [{
            //     "title": "Leaf Rake",
            //     "content": "Leaf rake with 48-inch wooden handle.",
            //     "imgUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            // }, {
            //     "title": "Garden Cart",
            //     "content": "15 gallon capacity rolling garden cart",
            //     "imgUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            // }];

            // return res.send({
            //     result: articles
            // });
        },
        getArticleByName(req, res) {
            let title = req.params.title;
            return data.getArticleByName(title)
                .then(article => {
                    res.send(article);
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
        getCreateArticleForm(req, res) {
            // if (!req.isAuthenticated()) {
            //     return res.redirect("/");
            // }

            return data.getAllArticles()
                .then(articles => {
                    return res.send({
                        model: articles,
                        user: req.user
                    });
                });
        },
        getEditArticleForm(req, res) {
            let id = req.params.id;

            return data.getArticleById(id)
                .then(article => {
                    res.send({
                        model: article,
                        user: req.user
                    });
                });
        },
        editArticleById(req, res) {
            let {
                id,
                newName,
                newImgUrl
            } = req.body;

            return data.editArticleById(id, newName, newImgUrl)
                .then(articles => {
                    return res.send({
                        model: articles,
                        user: req.user
                    });
                });
        }
    };
};