(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/components/table/table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'table/:id', component: _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"] },
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!fbS.currentUser\">\r\n  <app-login></app-login>\r\n</div>\r\n<button *ngIf=\"fbS.currentUser\" (click)=\"signOut()\">Sign Out</button>\r\n<div *ngIf=\"fbS.currentUser\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fbS) {
        this.fbS = fbS;
        this.title = 'triviesas';
    }
    AppComponent.prototype.signOut = function () {
        this.fbS.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _trivial_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trivial.service */ "./src/app/trivial.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_14__["TableComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_15__["BoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"]
            ],
            providers: [
                _firebase_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
                _trivial_service__WEBPACK_IMPORTED_MODULE_9__["TrivialService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"board\">\n  <div class=\"yellow\">Y</div>\n  <div class=\"blue\"></div>\n  <div class=\"none\"></div>\n  <div class=\"pink\"></div>\n  <div class=\"green\"></div>\n  <div class=\"none\"></div>\n  <div class=\"violet\"></div>\n  <div class=\"orange\">O</div>\n  <div class=\"violet\"></div>\n  <div class=\"none\"></div>\n  <div class=\"blue\"></div>\n  <div class=\"none\"></div>\n  <div class=\"yellow\"></div>\n  <div class=\"pink\">P</div>\n\n  <div class=\"blue\"></div>\n  <div class=\"yellow\"></div>\n  <div class=\"none\"></div>\n  <div class=\"none\"></div>\n  <div class=\"green\"></div>\n  <div class=\"violet\"></div>\n\n  <div class=\"violet\"></div>\n  <div class=\"orange\"></div>\n  <div class=\"pink\"></div>\n  <div class=\"yellow\"></div>\n  <div class=\"green\"></div>\n  <div class=\"blue\"></div>\n  <div class=\"center\"></div>\n  <div class=\"yellow\"></div>\n  <div class=\"pink\"></div>\n  <div class=\"blue\"></div>\n  <div class=\"green\"></div>\n  <div class=\"violet\"></div>\n  <div class=\"orange\"></div>\n\n  <div class=\"orange\"></div>\n  <div class=\"blue\"></div>\n  <div class=\"none\"></div>\n  <div class=\"none\"></div>\n  <div class=\"pink\"></div>\n  <div class=\"green\"></div>\n\n  <div class=\"green\">G</div>\n  <div class=\"pink\"></div>\n  <div class=\"none\"></div>\n  <div class=\"violet\"></div>\n  <div class=\"yellow\"></div>\n  <div class=\"none\"></div>\n  <div class=\"orange\"></div>\n  <div class=\"violet\">V</div>\n  <div class=\"orange\"></div>\n  <div class=\"none\"></div>\n  <div class=\"pink\"></div>\n  <div class=\"none\"></div>\n  <div class=\"green\"></div>\n  <div class=\"blue\">B</div>\n</div>"

/***/ }),

/***/ "./src/app/components/board/board.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#board {\n  display: grid;\n  grid-template-columns: repeat(14, 4vw);\n  grid-template-rows: repeat(9, 4vw);\n  color: #fff; }\n  #board div {\n    border: 1px solid #000; }\n  #board .green {\n    background-color: green; }\n  #board .yellow {\n    background-color: yellow; }\n  #board .violet {\n    background-color: purple; }\n  #board .orange {\n    background-color: orange; }\n  #board .blue {\n    background-color: #00ccff; }\n  #board .pink {\n    background-color: magenta; }\n  #board .none {\n    background-color: lightgray; }\n  #board div:nth-child(16) {\n    grid-row-start: 2;\n    grid-column: 14; }\n  #board div:nth-child(17) {\n    grid-row-start: 3;\n    grid-column: 1; }\n  #board div:nth-child(18) {\n    grid-row-start: 3;\n    grid-column: 14; }\n  #board div:nth-child(19) {\n    grid-row-start: 4;\n    grid-column: 1; }\n  #board div:nth-child(20) {\n    grid-row-start: 4;\n    grid-column: 14; }\n  #board div:nth-child(21) {\n    grid-row-start: 5;\n    grid-column: 1; }\n  #board div:nth-child(22) {\n    grid-row-start: 5;\n    grid-column: 2; }\n  #board div:nth-child(23) {\n    grid-row-start: 5;\n    grid-column: 3; }\n  #board div:nth-child(24) {\n    grid-row-start: 5;\n    grid-column: 4; }\n  #board div:nth-child(25) {\n    grid-row-start: 5;\n    grid-column: 5; }\n  #board div:nth-child(26) {\n    grid-row-start: 5;\n    grid-column: 6; }\n  #board div:nth-child(27) {\n    background-color: #000;\n    grid-row: 4 / span 3;\n    grid-column: 7 / span 2; }\n  #board div:nth-child(28) {\n    grid-row-start: 5;\n    grid-column: 9; }\n  #board div:nth-child(29) {\n    grid-row-start: 5;\n    grid-column: 10; }\n  #board div:nth-child(30) {\n    grid-row-start: 5;\n    grid-column: 11; }\n  #board div:nth-child(31) {\n    grid-row-start: 5;\n    grid-column: 12; }\n  #board div:nth-child(32) {\n    grid-row-start: 5;\n    grid-column: 13; }\n  #board div:nth-child(33) {\n    grid-row-start: 5;\n    grid-column: 14; }\n  #board div:nth-child(34) {\n    grid-row-start: 6;\n    grid-column: 1; }\n  #board div:nth-child(35) {\n    grid-row-start: 6;\n    grid-column: 14; }\n  #board div:nth-child(36) {\n    grid-row-start: 7;\n    grid-column: 1; }\n  #board div:nth-child(37) {\n    grid-row-start: 7;\n    grid-column: 14; }\n  #board div:nth-child(38) {\n    grid-row-start: 8;\n    grid-column: 1; }\n  #board div:nth-child(39) {\n    grid-row-start: 8;\n    grid-column: 14; }\n  #board div:nth-child(40) {\n    grid-row-start: 9;\n    grid-column: 1; }\n  #board div:nth-child(41) {\n    grid-row-start: 9;\n    grid-column: 2; }\n  #board div:nth-child(42) {\n    grid-row-start: 9;\n    grid-column: 3; }\n  #board div:nth-child(43) {\n    grid-row-start: 9;\n    grid-column: 4; }\n  #board div:nth-child(44) {\n    grid-row-start: 9;\n    grid-column: 5; }\n  #board div:nth-child(45) {\n    grid-row-start: 9;\n    grid-column: 6; }\n  #board div:nth-child(46) {\n    grid-row-start: 9;\n    grid-column: 7; }\n  #board div:nth-child(47) {\n    grid-row-start: 9;\n    grid-column: 8; }\n  #board div:nth-child(48) {\n    grid-row-start: 9;\n    grid-column: 9; }\n  #board div:nth-child(49) {\n    grid-row-start: 9;\n    grid-column: 10; }\n  #board div:nth-child(50) {\n    grid-row-start: 9;\n    grid-column: 11; }\n  #board div:nth-child(51) {\n    grid-row-start: 9;\n    grid-column: 12; }\n  #board div:nth-child(52) {\n    grid-row-start: 9;\n    grid-column: 13; }\n  #board div:nth-child(53) {\n    grid-row-start: 9;\n    grid-column: 14; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9DOlxcVXNlcnNcXGx1YmxhXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcREFXXFxEV0VDXFx3ZWItdHJpdmllc2FzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxib2FyZFxcYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUNBQXNDO0VBQ3RDLG1DQUFrQztFQUNsQyxZQUFXLEVBa0xaO0VBdExEO0lBTUksdUJBQXNCLEVBQ3ZCO0VBUEg7SUFTSSx3QkFBdUIsRUFDeEI7RUFWSDtJQVlJLHlCQUF3QixFQUN6QjtFQWJIO0lBZUkseUJBQXdCLEVBQ3pCO0VBaEJIO0lBa0JJLHlCQUF3QixFQUN6QjtFQW5CSDtJQXFCSSwwQkFBa0MsRUFDbkM7RUF0Qkg7SUF3QkksMEJBQXlCLEVBQzFCO0VBekJIO0lBMkJJLDRCQUEyQixFQUM1QjtFQTVCSDtJQThCSSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEI7RUFoQ0g7SUFrQ0ksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQXBDSDtJQXNDSSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEI7RUF4Q0g7SUEwQ0ksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQTVDSDtJQThDSSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEI7RUFoREg7SUFrREksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQXBESDtJQXNESSxrQkFBaUI7SUFDakIsZUFBYyxFQUNmO0VBeERIO0lBMERJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUE1REg7SUE4REksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQWhFSDtJQWtFSSxrQkFBaUI7SUFDakIsZUFBYyxFQUNmO0VBcEVIO0lBc0VJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUF4RUg7SUEwRUksdUJBQXNCO0lBQ3RCLHFCQUFvQjtJQUNwQix3QkFBdUIsRUFDeEI7RUE3RUg7SUErRUksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQWpGSDtJQW1GSSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEI7RUFyRkg7SUF1Rkksa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCO0VBekZIO0lBMkZJLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNoQjtFQTdGSDtJQStGSSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEI7RUFqR0g7SUFtR0ksa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCO0VBckdIO0lBdUdJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUF6R0g7SUEyR0ksa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCO0VBN0dIO0lBK0dJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUFqSEg7SUFtSEksa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCO0VBckhIO0lBdUhJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUF6SEg7SUEySEksa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCO0VBN0hIO0lBK0hJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUFqSUg7SUFtSUksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQXJJSDtJQXVJSSxrQkFBaUI7SUFDakIsZUFBYyxFQUNmO0VBeklIO0lBMklJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUE3SUg7SUErSUksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQWpKSDtJQW1KSSxrQkFBaUI7SUFDakIsZUFBYyxFQUNmO0VBckpIO0lBdUpJLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2Y7RUF6Skg7SUEySkksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDZjtFQTdKSDtJQStKSSxrQkFBaUI7SUFDakIsZUFBYyxFQUNmO0VBaktIO0lBbUtJLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNoQjtFQXJLSDtJQXVLSSxrQkFBaUI7SUFDakIsZ0JBQWMsRUFDZjtFQXpLSDtJQTJLSSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEI7RUE3S0g7SUErS0ksa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCO0VBakxIO0lBbUxJLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9hcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTQsIDR2dyk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgNHZ3KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXYge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICB9XHJcbiAgLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICAueWVsbG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcbiAgLnZpb2xldCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgfVxyXG4gIC5vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICAuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjA0LCAyNTUpO1xyXG4gIH1cclxuICAucGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xyXG4gIH1cclxuICAubm9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMTYpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE0O1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDE3KSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDE4KSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgIGdyaWQtY29sdW1uOiAxNDtcclxuICB9XHJcbiAgZGl2Om50aC1jaGlsZCgxOSkge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICB9XHJcbiAgZGl2Om50aC1jaGlsZCgyMCkge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICBncmlkLWNvbHVtbjogMTQ7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMjEpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMjIpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMjMpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMjQpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDQ7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMjUpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDU7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMjYpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDY7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMjcpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBncmlkLXJvdzogNCAvIHNwYW4gMztcclxuICAgIGdyaWQtY29sdW1uOiA3IC8gc3BhbiAyO1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDI4KSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNTtcclxuICAgIGdyaWQtY29sdW1uOiA5O1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDI5KSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNTtcclxuICAgIGdyaWQtY29sdW1uOiAxMDtcclxuICB9XHJcbiAgZGl2Om50aC1jaGlsZCgzMCkge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XHJcbiAgICBncmlkLWNvbHVtbjogMTE7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMzEpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEyO1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDMyKSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNTtcclxuICAgIGdyaWQtY29sdW1uOiAxMztcclxuICB9XHJcbiAgZGl2Om50aC1jaGlsZCgzMykge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XHJcbiAgICBncmlkLWNvbHVtbjogMTQ7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMzQpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA2O1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMzUpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA2O1xyXG4gICAgZ3JpZC1jb2x1bW46IDE0O1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDM2KSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNztcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDM3KSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNztcclxuICAgIGdyaWQtY29sdW1uOiAxNDtcclxuICB9XHJcbiAgZGl2Om50aC1jaGlsZCgzOCkge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDg7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICB9XHJcbiAgZGl2Om50aC1jaGlsZCgzOSkge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDg7XHJcbiAgICBncmlkLWNvbHVtbjogMTQ7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDApIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDEpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDIpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDMpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDQ7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDQpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDU7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDUpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDY7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDYpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDc7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDcpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDg7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDgpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDk7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNDkpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEwO1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDUwKSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogOTtcclxuICAgIGdyaWQtY29sdW1uOjExO1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDUxKSB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogOTtcclxuICAgIGdyaWQtY29sdW1uOiAxMjtcclxuICB9XHJcbiAgZGl2Om50aC1jaGlsZCg1Mikge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDk7XHJcbiAgICBncmlkLWNvbHVtbjogMTM7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoNTMpIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW46IDE0O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/components/board/board.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Hello {{user}}</p>\r\n<button (click)=\"table()\">Create table</button>\r\n\r\n<input [(ngModel)]=\"tableId\" (ngModelChange)=\"goToTable($event)\" />\r\n<button i18n class=\"more\" (click)=\"goToTable()\">go to table</button>\r\n\r\n<button (click)=\"ask('0','easy')\">ASK</button>\r\n<h3>corrects: {{corrects}}</h3>\r\n<h3>wrongs: {{wrongs}}</h3>\r\n<div *ngIf=\"everything\">\r\n  <h4>{{question}}</h4>\r\n  <div *ngFor=\"let answer of answers ; index as i;\">\r\n    <button (click)=\"res(answer)\">{{ answer }}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _trivial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../trivial.service */ "./src/app/trivial.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingComponent = /** @class */ (function () {
    function LandingComponent(fbS, trS, aFDb, router) {
        var _this = this;
        this.fbS = fbS;
        this.trS = trS;
        this.aFDb = aFDb;
        this.router = router;
        this.cat = 0;
        this.tableId = null;
        fbS.currentUserObservable.subscribe(function (user) {
            _this.aFDb.object('/player/' + user.uid).valueChanges().subscribe(function (data) {
                _this.corrects = data['corrects'];
                _this.wrongs = data['wrongs'];
            });
        });
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.user = this.fbS.currentUser.displayName;
    };
    LandingComponent.prototype.goToTable = function () {
        console.log(this.tableId);
        this.router.navigate(['/table', this.tableId]);
    };
    LandingComponent.prototype.table = function () {
        this.tableId = this.fbS.createTable();
        console.log(this.tableId);
        this.router.navigate(['/table', this.tableId]);
    };
    LandingComponent.prototype.ask = function (cat, dif) {
        var _this = this;
        this.trS.getQuestion(cat, dif).subscribe(function (everything) {
            _this.everything = everything['results'][0];
            _this.question = everything['results'][0]['question'];
            console.log(_this.everything);
            _this.question = decodeURIComponent(_this.question);
            console.log(_this.question);
            _this.answers = everything['results'][0]['incorrect_answers'];
            _this.answers.push(everything['results'][0]['correct_answer']);
            _this.arrangeAnswers();
        }, function (error) {
            console.log(error);
        });
    };
    LandingComponent.prototype.arrangeAnswers = function () {
        var _this = this;
        this.answers.sort(function () {
            return 0.5 - Math.random();
        });
        this.answers.forEach(function (answer, i) {
            _this.answers[i] = decodeURIComponent(answer);
        });
        console.log(this.answers);
    };
    LandingComponent.prototype.res = function (ans) {
        console.log(ans);
        if (encodeURIComponent(ans) === this.everything.correct_answer) {
            this.correct = true;
            this.corrects++;
        }
        else {
            this.correct = false;
            this.wrongs++;
        }
        console.log(this.correct);
        this.fbS.updatePlayerData(this.corrects, this.wrongs);
        this.ask(this.cat, 'medium');
        if (this.cat < 4) {
            this.cat++;
        }
        else if (this.cat === 4) {
            this.cat = 0;
        }
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _trivial_service__WEBPACK_IMPORTED_MODULE_4__["TrivialService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Sign In</h3>\r\n<form>\r\n  <input placeholder=\"Email address\" type=\"text\" [(ngModel)]=\"email\" name=\"email\">\r\n  <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\">\r\n  <button (click)=\"signIn()\">Sign In</button>\r\n</form>\r\n\r\n<h3>Sign Up</h3>\r\n<form>\r\n  <input placeholder=\"Email address\" type=\"email\" [(ngModel)]=\"nemail\" name=\"nemail\">\r\n  <input placeholder=\"name\" type=\"text\" [(ngModel)]=\"nname\" name=\"nname\">\r\n  <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"npassword\" name=\"npassword\">\r\n  <button (click)=\"signUp()\">Sign Up</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fbS, router) {
        this.fbS = fbS;
        this.router = router;
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        console.log(this.email);
        this.fbS.emailLogin(this.email, this.password)
            .then(function (res) {
            if (_this.fbS.currentUser) {
                _this.router.navigate(['/']);
                console.log('eyy');
            }
            else {
                _this.error = true;
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.fbS.emailReg(this.nemail, this.npassword, this.nname)
            .then(function (res) { return _this.router.navigate(['/']); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/table/table.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[ '/' ]\">go back</a>\r\n<p>table link: {{ tableId }}</p>\r\n<ul>\r\n  <li *ngFor=\"let player of players\">{{ player.name }}: {{ player.score }}</li>\r\n</ul>\r\n<button *ngIf=\"players.length > 1 && !table.hasStarted\" (click)=\"start()\">start</button>\r\n\r\n<div *ngIf=\"table.hasStarted && currentPlayer\">\r\n  <h3>current player: {{ currentPlayer.name }}</h3>\r\n<div>\r\n  <h2>{{ table.card.category }}</h2>\r\n  <h4>{{ table.card.question }}</h4>\r\n  <div *ngFor=\"let answer of table.card.answers ; index as i;\">\r\n    <button (click)=\"res(answer)\">{{ answer }}</button>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/table/table.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _trivial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../trivial.service */ "./src/app/trivial.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TableComponent = /** @class */ (function () {
    function TableComponent(fbS, route, trS, aFDb) {
        var _this = this;
        this.fbS = fbS;
        this.route = route;
        this.trS = trS;
        this.aFDb = aFDb;
        this.cat = 0;
        this.tableId = '';
        this.table = {};
        this.players = [];
        this.turn = 0;
        // sacar parametro de url
        this.tableId = this.route.snapshot.paramMap.get('id');
        this.currentPlayer = [];
        console.log(this.tableId);
        this.fbS.pushUserIntoTable(this.tableId);
        this.aFDb.object(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tableNode + '/' + this.tableId).valueChanges().subscribe(function (data) {
            _this.table = data;
        });
        this.aFDb.list(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tableNode + '/' + this.tableId + '/players').valueChanges().subscribe(function (data) {
            _this.players = data;
        });
        this.aFDb.list(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tableNode + '/' + this.tableId + '/players', function (ref) { return ref.orderByChild('isTurn').equalTo(true); })
            .valueChanges().subscribe(function (data) {
            _this.currentPlayer = data[0];
        });
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.start = function () {
        console.log('started');
        this.fbS.playPauseTable(this.tableId, true);
        this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true);
        this.play();
    };
    TableComponent.prototype.play = function () {
        console.log('playing');
        console.log('current player: ' + this.players[this.turn].name);
        var cat = [Math.floor((Math.random() * this.trS.categories.length))];
        console.log('categoty #' + cat);
        this.ask(cat, 'medium');
    };
    TableComponent.prototype.ask = function (cat, dif) {
        var _this = this;
        console.log('ask');
        this.trS.getQuestion(cat, dif).subscribe(function (everything) {
            _this.everything = everything['results'][0];
            console.log(_this.everything);
            var question = _this.everything['question'];
            question = decodeURIComponent(question);
            var answers = _this.everything['incorrect_answers'];
            answers.push(_this.everything['correct_answer']);
            _this.arrangeAnswers(answers, question, _this.everything['correct_answer']);
        }, function (error) {
            console.log(error);
        });
    };
    TableComponent.prototype.arrangeAnswers = function (answers, question, correct) {
        console.log('arrange answers');
        console.log(answers);
        console.log(question);
        answers.sort(function () {
            return 0.5 - Math.random();
        });
        answers.forEach(function (answer, i) {
            answers[i] = decodeURIComponent(answer);
        });
        console.log(question);
        console.log(answers);
        console.log(correct);
        console.log(this.trS.name);
        this.fbS.getQuestion(this.tableId, question, answers, correct, this.trS.name);
    };
    TableComponent.prototype.res = function (ans) {
        console.log(this.everything);
        console.log(ans);
        if (encodeURIComponent(ans) === this.table['card']['correct']) {
            this.changeTurn(true);
        }
        else {
            this.changeTurn(false);
        }
        this.play();
    };
    TableComponent.prototype.changeTurn = function (correct) {
        if (correct) {
            this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score + 1, true);
            console.log('yes');
        }
        else {
            this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, false);
            if (this.turn < this.players.length - 1) {
                this.turn++;
            }
            else {
                this.turn = 0;
            }
            this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true);
            console.log('no');
        }
        this.currentPlayer = this.players[this.turn];
        console.log('turn: ' + this.turn);
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/components/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _trivial_service__WEBPACK_IMPORTED_MODULE_5__["TrivialService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/*!*************************************!*\
  !*** ./src/app/firebase.service.ts ***!
  \*************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FirebaseService = /** @class */ (function () {
    function FirebaseService(afAuth, afDb, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.router = router;
        this.authState = null;
        this.dbPlayer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](null);
        // Remembers login
        this.afAuth.authState.subscribe(function (res) {
            _this.authState = res;
        });
        // Gets users data
        this.dbPlayer = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
            if (res) {
                return _this.afDb.object(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].playerNode + '/' + res.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
        }));
    }
    Object.defineProperty(FirebaseService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseService.prototype, "currentUserObservable", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (this.authState) {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    /* ****** LOGIN / REGISTRATION / LOGOUT ****** */
    // Registration
    FirebaseService.prototype.emailReg = function (email, password, name) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (player) {
            _this.authState = player['user'];
            console.log(_this.authState);
            if (player) {
                firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.updateProfile({
                    displayName: name,
                    photoURL: null
                });
            }
            _this.regPlayerData();
        })
            .catch(function (error) { return console.log(error); });
    };
    // Login
    FirebaseService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (player) {
            _this.authState = player;
            console.log(_this.authState);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Logout
    FirebaseService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
        this.authState = null;
    };
    /* ****** DATABASE ****** */
    // Writes player info on database
    FirebaseService.prototype.regPlayerData = function () {
        console.log(this.currentUserId);
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].playerNode + ("/" + this.authState.uid);
        console.log(path);
        var data = {
            email: this.authState.email,
            corrects: 0,
            wrongs: 0
        };
        this.afDb.object(path).set(data)
            .catch(function (error) { return console.log(error); });
    };
    FirebaseService.prototype.updatePlayerData = function (corrects, wrongs) {
        console.log(this.currentUserId);
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].playerNode + ("/" + this.currentUserId);
        console.log(path);
        var data = {
            email: this.authState.email,
            corrects: corrects,
            wrongs: wrongs
        };
        this.afDb.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    FirebaseService.prototype.createTable = function () {
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tableNode;
        var time = new Date().getTime();
        console.log(time);
        var data = {
            creator: this.authState.uid,
            createdAt: time,
            hasStarted: false,
            question: null
        };
        console.log(data);
        var table = this.afDb.list(path).push(data);
        this.pushUserIntoTable(table.key);
        return table.key;
    };
    FirebaseService.prototype.playPauseTable = function (tableId, started) {
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tableNode;
        this.afDb.list(path).update(tableId, { hasStarted: started });
    };
    FirebaseService.prototype.getQuestion = function (tableId, question, answers, correct, category) {
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tableNode;
        this.afDb.list(path).set(tableId + '/card', { question: question, answers: answers, correct: correct, category: category });
    };
    FirebaseService.prototype.pushUserIntoTable = function (id) {
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tableNode + ("/" + id + "/players/" + this.currentUserId);
        var data = {
            id: this.authState.uid,
            name: this.authState.displayName,
            isTurn: false,
            score: 0,
        };
        console.log(this.authState.displayName);
        this.afDb.object(path).set(data);
    };
    FirebaseService.prototype.updateUserTableInfo = function (tableId, uid, points, turn) {
        var path = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tableNode + ("/" + tableId + "/players/" + uid);
        var data = {
            isTurn: turn,
            score: points
        };
        this.afDb.object(path).update(data);
        console.log('user table info updated');
    };
    /* ****** PASSWORD STUFF ****** */
    // Change password INSIDE app
    FirebaseService.prototype.changePassword = function (newPassword) {
        return this.authState.updatePassword(newPassword).then(function () {
        }).catch(function (error) {
            console.log(error);
        });
    };
    // Forgot password, sends MAIL
    FirebaseService.prototype.resetPassword = function (email) {
        var fbAuth = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/trivial.service.ts":
/*!************************************!*\
  !*** ./src/app/trivial.service.ts ***!
  \************************************/
/*! exports provided: TrivialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrivialService", function() { return TrivialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrivialService = /** @class */ (function () {
    function TrivialService(http) {
        this.http = http;
        this.base_url = 'https://opentdb.com/api.php?amount=1';
        this.blue = {
            category: 'Geography',
            array: [22, 24]
        };
        this.violet = {
            category: 'Art & Literature',
            array: [10, 25, 29]
        };
        this.yellow = {
            category: 'History and Politics',
            array: [23, 20]
        };
        this.pink = {
            category: 'Entertainment',
            array: [11, 12, 14, 15, 32]
        };
        this.green = {
            category: 'Science',
            array: [17, 18, 19, 30]
        };
        this.orange = {
            category: 'Sports and General Knowledge',
            array: [9, 21]
        };
        this.categories = [this.blue, this.violet, this.yellow, this.pink, this.green, this.orange];
    }
    TrivialService.prototype.getQuestion = function (category, difficulty) {
        this.name = this.categories[category].category;
        console.log(this.name);
        this.getCategory(category);
        var url = this.base_url + "&category=" + this.category + "&difficulty=" + difficulty + "&type=multiple&encode=url3986";
        return this.http.get(url);
    };
    TrivialService.prototype.getCategory = function (category) {
        this.category = this.categories[category].array[Math.floor((Math.random() * this.categories[category].array.length))];
    };
    TrivialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TrivialService);
    return TrivialService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAXAImU8cRKS2FDHNYl_01L7eRj3Hx5uW8',
        authDomain: 'triviesas.firebaseapp.com',
        databaseURL: 'https://triviesas.firebaseio.com',
        projectId: 'triviesas',
        storageBucket: 'triviesas.appspot.com',
        messagingSenderId: '842998002362'
    },
    playerNode: '/player',
    tableNode: '/table'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lubla\OneDrive\Documentos\DAW\DWEC\web-triviesas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map