"use strict";
var router_1 = require("@angular/router");
var article_list_component_1 = require("./article-list/article-list.component");
var article_detail_component_1 = require("./article-detail/article-detail.component");
var create_article_compontent_1 = require("./create/create-article.compontent");
var edit_article_component_1 = require("./edit/edit-article.component");
var routes = [
    { path: 'articles', component: article_list_component_1.ArticleListComponent },
    { path: 'article/create', component: create_article_compontent_1.CreateArticleComponent },
    { path: 'article/edit', component: edit_article_component_1.EditArticleComponent },
    { path: 'article/:id', component: article_detail_component_1.ArticleDetailComponent }
];
exports.ArticleRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=article.routing.js.map