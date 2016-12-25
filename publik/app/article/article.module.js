"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var article_list_component_1 = require("./article-list/article-list.component");
var article_detail_component_1 = require("./article-detail/article-detail.component");
var create_article_compontent_1 = require("./create/create-article.compontent");
var edit_article_component_1 = require("./edit/edit-article.component");
var article_routing_1 = require("./article.routing");
var article_service_1 = require("./services/article.service");
var ArticleModule = (function () {
    function ArticleModule() {
    }
    return ArticleModule;
}());
ArticleModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            article_routing_1.ArticleRoutes
        ],
        declarations: [
            article_list_component_1.ArticleListComponent,
            article_detail_component_1.ArticleDetailComponent,
            create_article_compontent_1.CreateArticleComponent,
            edit_article_component_1.EditArticleComponent
        ],
        providers: [article_service_1.ArticleService],
        exports: [
            article_detail_component_1.ArticleDetailComponent,
            article_list_component_1.ArticleListComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], ArticleModule);
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map