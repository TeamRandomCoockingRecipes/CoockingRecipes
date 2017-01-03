/* globals module */

const NEWEST_CATEGORIES_COUNT = 3;

module.exports = function(data) {
    return {
        createCategory(req, res) {
            if (!req.isAuthenticated()) {
                return res.redirect("/");
            }
            let {
                name,
                imgUrl
            } = req.body;

            return data.createCategory(name, imgUrl)
                .then(category => {
                    return res.send(category);
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        },

        getAllCategories(req, res) {
            data.getAllCategories()
                .then(categories => {
                    return res.send({
                        result: categories
                            // user: req.user
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        },
        editCategoryById(req, res) {
            let {
                _id,
                name,
                imgUrl,
                description
            } = req.body;

            return data.editCategoryById(_id, name, imgUrl, description)
                .then(category => {
                    return res.json({
                        category
                        // user: req.user
                    });
                });
        },
        deleteCategoryById(req, res) {
            console.log("in category delete controler: req: ", req.body);

            let {
                _id,
                name,
                imgUrl,
                description
            } = req.body;

            return data.deleteCategory(_id, name, imgUrl, description)
                .then(category => {
                    console.log("in category delete response controler:  ", category);
                    return res.json({
                        category
                        // user
                    });
                });
        },

        // getAllCategories(req, res) {
        //     data.getAllCategories()
        //         .then(categories => {
        //             if (req.isAuthenticated()) {
        //                 return res.render("category/all", {
        //                     categories,
        //                     user: req.user
        //                 });
        //             } else {
        //                 return res.render("category/all", {
        //                     categories,
        //                     user: req.user
        //                 });
        //             }

        //         })
        //         .catch(err => {
        //             res.status(400)
        //                 .send(err);
        //         });
        // },
        // getCategoryByName(req, res) {
        //   let name = req.params.name;

        //  return data.getCategoryByName(name)
        //     .then(category => {
        //         res.send(category);
        //    })
        //    .catch(err => {
        //       res.status(400)
        //          .send(err);
        //  });
        // },
        getCategoryById(req, res) {
            let id = req.params.id;

            return data.getCategoryById(id)
                .then(category => {
                    return res.send({
                        model: category,
                        user: req.user
                    });
                })
                .catch(err => {
                    res.status(400)
                        .send(err);
                });
        },
        getNewestCategoriesAjax(req, res) {
            console.log("getNewestCategoriesAjax");
            data.getNewestCategories(NEWEST_CATEGORIES_COUNT)
                .then(categories => {
                    res.send({
                        result: categories
                            // .map(superhero => mapper.map(superhero, "_id", "name", "imageUrl"))
                    });
                });
        },
        getCreateCategoryForm(req, res) {
            if (!req.isAuthenticated()) {
                return res.redirect("/");
            }
            return data.getAllCategories()
                .then(categories => {
                    return res.send({
                        model: categories,
                        user: req.user
                    });
                });
        },
        // updateCategory(req, res) {

        // },
        // deleteCategory(req, res) {

        // }
        // getAllReciepsByCategory()
    };
};