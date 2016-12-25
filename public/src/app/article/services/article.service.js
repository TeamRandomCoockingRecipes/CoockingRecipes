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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
require("rxjs/add/observable/of");
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.articleBackendUrl = 'http://localhost:3005/api/articles/test';
        this.articlesUrl = 'api/testStore/articles.json';
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.articlesUrl)
            .map(function (response) { return response.json()['result']; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    // getArticleById(): Observable<IArticle> {
    //     let articles = '';
    // }
    ArticleService.prototype.addArticle = function (newArticle) {
        return this.http.post(this.articlesUrl, newArticle)
            .map(this.exrectData)
            .catch(this.handleError);
    };
    // edit()
    // delete()
    ArticleService.prototype.exrectData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ArticleService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return ArticleService;
}());
ArticleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map