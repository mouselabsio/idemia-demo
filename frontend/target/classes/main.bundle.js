webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n margin: 0;\n font-family: Roboto, sans-serif;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n<mat-toolbar color=\"primary\">\n  <img width=\"180\" height=\"45\" \n       src=\"https://www.idemia.com/sites/newco/themes/newco/img/logo.svg\" class=\"site-nav__logo\"><span class=\"title\">[ Coding Challenge ]</span> \n</mat-toolbar>\n<router-outlet></router-outlet>\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'to the take-home assignment app!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_record_service_1 = __webpack_require__("./src/app/user-record/user-record.service.ts");
var user_record_list_component_1 = __webpack_require__("./src/app/user-record-list/user-record-list.component.ts");
var giphy_service_1 = __webpack_require__("./src/app/shared/giphy/giphy.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_record_add_component_1 = __webpack_require__("./src/app/user-record-add/user-record-add.component.ts");
var user_record_refresh_component_1 = __webpack_require__("./src/app/user-record-refresh/user-record-refresh.component.ts");
var appRoutes = [
    { path: '', redirectTo: '/user-record-refresh', pathMatch: 'full' },
    {
        path: 'user-record-list',
        component: user_record_list_component_1.UserRecordListComponent
    },
    {
        path: 'user-record-refresh',
        component: user_record_refresh_component_1.UserRecordRefreshComponent
    },
    {
        path: 'user-record-add',
        component: user_record_add_component_1.UserRecordAddComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_record_list_component_1.UserRecordListComponent,
                user_record_add_component_1.UserRecordAddComponent,
                user_record_refresh_component_1.UserRecordRefreshComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatToolbarModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [user_record_service_1.UserRecordService, giphy_service_1.GiphyService],
            bootstrap: [app_component_1.AppComponent, user_record_list_component_1.UserRecordListComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/shared/giphy/giphy.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var GiphyService = /** @class */ (function () {
    function GiphyService(http) {
        this.http = http;
        // Public beta key: https://github.com/Giphy/GiphyAPI#public-beta-key
        this.giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';
    }
    GiphyService.prototype.get = function (searchTerm) {
        var apiLink = this.giphyApi + searchTerm;
        return this.http.get(apiLink).map(function (response) {
            if (response.data.length > 0) {
                return response.data[0].images.original.url;
            }
            else {
                return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404
            }
        });
    };
    GiphyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GiphyService);
    return GiphyService;
}());
exports.GiphyService = GiphyService;


/***/ }),

/***/ "./src/app/user-record-add/user-record-add.component.html":
/***/ (function(module, exports) {

module.exports = "<script>\n   angular.module('dateInputExample', [])\n     .controller('DateController', ['$scope', function($scope) {\n       $scope.example = {\n         value: new Date(2013, 9, 22)\n       };\n     }]);\n</script>\n<mat-card>\n    <form #recordForm=\"ngForm\" (ngSubmit)=\"blee(recordForm.value)\">\n        <mat-card-header>\n            <mat-card-title><h2>Add User Record</h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <input type=\"hidden\" name=\"href\" [(ngModel)]=\"record.href\">\n            <mat-form-field>\n                <input matInput placeholder=\"User Name:\" [(ngModel)]=\"record.username\"\n                       required name=\"username\" #username>\n            </mat-form-field><br>\n            <mat-form-field>\n                <input matInput placeholder=\"Favorite Quote:\" [(ngModel)]=\"record.description\"\n                       required name=\"description\" #description>\n            </mat-form-field><br>\n            <mat-form-field>\n                <input matInput type=\"date\" [(ngModel)]=\"record.DOB\"\n                       placeholder=\"DOB:\" min=\"1913-01-01\" max=\"2010-12-31\" required name=\"DOB\" #DOB>\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-raised-button color=\"primary\" type=\"submit\"\n                    [disabled]=\"!recordForm.form.valid\">Add\n            </button>\n            <a mat-raised-button color=\"warn\" routerLink=\"/user-record-refresh\">Cancel</a>\n        </mat-card-actions>\n    </form>\n</mat-card>"

/***/ }),

/***/ "./src/app/user-record-add/user-record-add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_record_service_1 = __webpack_require__("./src/app/user-record/user-record.service.ts");
var giphy_service_1 = __webpack_require__("./src/app/shared/giphy/giphy.service.ts");
var UserRecordAddComponent = /** @class */ (function () {
    function UserRecordAddComponent(route, router, userRecordService, giphyService) {
        this.route = route;
        this.router = router;
        this.userRecordService = userRecordService;
        this.giphyService = giphyService;
        this.record = {};
    }
    UserRecordAddComponent.prototype.ngOnInit = function () {
    };
    UserRecordAddComponent.prototype.ngOnDestroy = function () {
    };
    UserRecordAddComponent.prototype.gotoList = function () {
        this.router.navigate(['/user-record-list']);
    };
    UserRecordAddComponent.prototype.blee = function (form) {
        var _this = this;
        this.userRecordService.save(form).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    UserRecordAddComponent = __decorate([
        core_1.Component({
            selector: 'app-user-record-add',
            template: __webpack_require__("./src/app/user-record-add/user-record-add.component.html"),
            styles: [__webpack_require__("./src/app/user-record-add/user-record-add.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            user_record_service_1.UserRecordService,
            giphy_service_1.GiphyService])
    ], UserRecordAddComponent);
    return UserRecordAddComponent;
}());
exports.UserRecordAddComponent = UserRecordAddComponent;


/***/ }),

/***/ "./src/app/user-record-add/user-record-add.css":
/***/ (function(module, exports) {

module.exports = ".giphy {\n  margin: 10px;\n}"

/***/ }),

/***/ "./src/app/user-record-list/user-record-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <button mat-fab color=\"primary\" routerLink=\"/user-record-add\">Add</button>\n    <button mat-fab color=\"primary\" routerLink=\"/user-record-refresh\">Refresh</button>\n    <mat-card-header><h3>User Record List</h3></mat-card-header>\n    <mat-card-content>\n        <mat-list>\n            <mat-list-item *ngFor=\"let record of userrecords\">\n                <img mat-list-avatar src=\"{{record.giphyUrl}}\">\n                <h4 mat-line>Name: {{record.username}}</h4>\n                <h4 mat-line>Favorite Quote: {{record.description}}</h4>\n                <h4 mat-line>DOB: {{record.DOB}}</h4>\n                <h4 mat-line>ID: {{record.uuid}}</h4>\n            </mat-list-item>\n        </mat-list>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/user-record-list/user-record-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_record_service_1 = __webpack_require__("./src/app/user-record/user-record.service.ts");
var giphy_service_1 = __webpack_require__("./src/app/shared/giphy/giphy.service.ts");
var UserRecordListComponent = /** @class */ (function () {
    function UserRecordListComponent(userRecordService, giphyService) {
        this.userRecordService = userRecordService;
        this.giphyService = giphyService;
    }
    UserRecordListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRecordService.get().subscribe(function (data) {
            _this.userrecords = data;
            var _loop_1 = function (record) {
                _this.giphyService.get(record.username).subscribe(function (url) { return record.giphyUrl = url; });
            };
            for (var _i = 0, _a = _this.userrecords; _i < _a.length; _i++) {
                var record = _a[_i];
                _loop_1(record);
            }
        });
    };
    UserRecordListComponent = __decorate([
        core_1.Component({
            selector: 'app-user-record-list',
            template: __webpack_require__("./src/app/user-record-list/user-record-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [user_record_service_1.UserRecordService, giphy_service_1.GiphyService])
    ], UserRecordListComponent);
    return UserRecordListComponent;
}());
exports.UserRecordListComponent = UserRecordListComponent;


/***/ }),

/***/ "./src/app/user-record-refresh/user-record-refresh.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_record_service_1 = __webpack_require__("./src/app/user-record/user-record.service.ts");
var giphy_service_1 = __webpack_require__("./src/app/shared/giphy/giphy.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserRecordRefreshComponent = /** @class */ (function () {
    function UserRecordRefreshComponent(route, router, userRecordService, giphyService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userRecordService = userRecordService;
        this.giphyService = giphyService;
        this.route.params.subscribe(function (val) {
            _this.userRecordService.refresh().subscribe(function (data) {
                _this.userrecords = data;
                var _loop_1 = function (record) {
                    _this.giphyService.get(record.username).subscribe(function (url) { return record.giphyUrl = url; });
                };
                for (var _i = 0, _a = _this.userrecords; _i < _a.length; _i++) {
                    var record = _a[_i];
                    _loop_1(record);
                }
            });
        });
    }
    UserRecordRefreshComponent.prototype.ngOnInit = function () {
    };
    UserRecordRefreshComponent = __decorate([
        core_1.Component({
            selector: 'app-user-record-refresh',
            template: __webpack_require__("./src/app/user-record-list/user-record-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            user_record_service_1.UserRecordService,
            giphy_service_1.GiphyService])
    ], UserRecordRefreshComponent);
    return UserRecordRefreshComponent;
}());
exports.UserRecordRefreshComponent = UserRecordRefreshComponent;


/***/ }),

/***/ "./src/app/user-record/user-record.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var UserRecordService = /** @class */ (function () {
    function UserRecordService(http) {
        this.http = http;
        this.API = '//localhost:8081';
        this.GET_USER_RECORDS = this.API + '/idemia/v1/users/records';
        this.REFRESH_USER_RECORDS = this.API + '/idemia/v1/users/records?action=refresh';
    }
    UserRecordService.prototype.get = function () {
        return this.http.get(this.GET_USER_RECORDS);
    };
    UserRecordService.prototype.refresh = function () {
        return this.http.get(this.REFRESH_USER_RECORDS);
    };
    UserRecordService.prototype.save = function (record) {
        var result;
        result = this.http.post(this.GET_USER_RECORDS, record);
        return result;
    };
    UserRecordService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserRecordService);
    return UserRecordService;
}());
exports.UserRecordService = UserRecordService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map