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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var BackendService = (function () {
    function BackendService(http) {
        var _this = this;
        this.makeRequest = function () {
            return _this.myObservable()
                .flatmap(function (x) {
                return _this.http
                    .get('http://jsonplaceholder.typicode.com/posts/1')
                    .map(function (responseData) {
                    return responseData.json();
                });
            });
        };
        this.http = http;
    }
    BackendService.prototype.getStatus = function () {
        console.log("Hello from service");
        return this.http.get("http://localhost/AngularwithLaravel/backend/api/status")
            .map(function (response) { return response.json(); });
    }; // stub
    BackendService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.service.js.map