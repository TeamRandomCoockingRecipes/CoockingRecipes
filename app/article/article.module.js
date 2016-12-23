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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var article_list_component_1 = require('./article-list/article-list.component');
var article_detail_component_1 = require('./article-detail/article-detail.component');
var article_routing_1 = require('./article.routing');
var article_service_1 = require('./services/article.service');
var ArticleModule = (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                article_routing_1.ArticleRoutes
            ],
            declarations: [
                article_list_component_1.ArticleListComponent,
                article_detail_component_1.ArticleDetailComponent
            ],
            providers: [article_service_1.ArticleService],
            exports: [
                article_detail_component_1.ArticleDetailComponent,
                article_list_component_1.ArticleListComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleModule);
    return ArticleModule;
}());
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map