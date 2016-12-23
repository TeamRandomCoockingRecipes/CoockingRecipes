"use strict";
var router_1 = require('@angular/router');
var article_list_component_1 = require('./article-list/article-list.component');
var article_detail_component_1 = require('./article-detail/article-detail.component');
var routes = [
    { path: 'articles', component: article_list_component_1.ArticleListComponent },
    { path: 'article/:id', component: article_detail_component_1.ArticleDetailComponent }
];
exports.ArticleRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=article.routing.js.map