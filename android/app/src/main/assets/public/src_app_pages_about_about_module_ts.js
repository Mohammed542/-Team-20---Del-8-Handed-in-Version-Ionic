(self["webpackChunkaasifionic"] = self["webpackChunkaasifionic"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 3423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 388);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 3423);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 388);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 388:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.page.html */ 4409);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 6899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutPage);



/***/ }),

/***/ 6899:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  padding: 1em;\n  background-repeat: no-repeat;\n  /* width: 100%; */\n  background-size: 100% 100%;\n}\n\np {\n  display: flex;\n  word-break: break-word;\n  color: black;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFHQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZKIiwiZmlsZSI6ImFib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9idWlsZGluZ190b3dlcl9za3lzY3JhcGVyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59Il19 */");

/***/ }),

/***/ 4409:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button href=\"/access\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Prime Properties</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <div class=\"background\">\r\n\r\n    <div style=\"display: flex; justify-content: center; margin-bottom: 2em;\">\r\n      <img width=277 height=91 id=\"Picture 2\" src=\"../../../assets//logo.png\" />\r\n    </div>\r\n\r\n    <h3 style='text-align:center'><span>Welcome to the Prime Properties System developed for you to improve\r\n        efficiency.</span></h3>\r\n\r\n    <p style='text-align:center;'><span>\r\n        H and A properties was founded by Mohammed Hanif Suliman and Abdullah Suliman in\r\n        the year 2015. H and A properties is a family-owned private company that owns\r\n        many properties around South Africa. They rent out these properties to\r\n        individuals and companies for either personal or commercial use. </span></p>\r\n\r\n\r\n    <p style=\"text-align:center;\">\r\n      You may view your assigned maintenaces as well as upload images of your complete work.\r\n      If you would like HELP on how to use this application, below is a link to a HELP VIDEO\r\n    </p>\r\n\r\n    <iframe style=\"width: 100%;\" src=\"https://www.youtube.com/embed/OM1PtntEkBk\" title=\"YouTube video player\"\r\n      frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\r\n      allowfullscreen></iframe>\r\n\r\n    <p style='text-align:center'><span>\r\n        If you require any further information or help please contact: </span></p>\r\n\r\n\r\n    <p style='display: block;text-align:center'><span><img width=237 height=237 id=\"Picture 11\" src=\"../../assets/client.jpg\"\r\n          alt=\"A group of men posing for a photo&#10;&#10;Description automatically generated with medium confidence\"></span>\r\n    </p>\r\n\r\n\r\n    <p style='display: flex; text-align:center;; word-break: break-all;'><span> Yusuf\r\n        Suliman manages H&amp;A Property Investments. </span></p>\r\n\r\n    <p style='display: flex; text-align:center; word-break: break-all; justify-content: center;'><span>Cellnumber: 0764861309 </span></p>\r\n\r\n    <p style='display: flex; text-align:center; word-break: break-all;'><span>Email: yusufsuliman@aaziescc.com </span>\r\n    </p>\r\n\r\n    <p style='text-align:center'><span> This\r\n        system was created by the TroubleShooters team studying at the University Of\r\n        Pretoria </span></p>\r\n\r\n    <p style='display: flex; text-align:center; word-break: break-all; justify-content: center;'><span> Contact\r\n        Details below: </span></p>\r\n\r\n    <p style='display: block;text-align:center'>\r\n      <img width=343 height=69 id=\"Picture 4\" src=\"../../assets/troubleShooters.jpeg\"\r\n        alt=\"A picture containing logo&#10;&#10;Description automatically generated\"></p>\r\n\r\n\r\n    <p style='text-align:center'><span><img width=437 height=234 id=\"Picture 3\" src=\"../../assets/team.jpeg\"\r\n          alt=\"A group of men posing for a photo&#10;&#10;Description automatically generated with medium confidence\"></span>\r\n    </p>\r\n\r\n    <p style='text-align:center'>\r\n\r\n\r\n    <div class=\"photounder\" style=\"display: flex; width: 100%; flex-wrap: wrap; justify-content: space-evenly;\">\r\n      <div class=\"mb-2\"style='display: block; text-align:center; word-break: break-all; justify-content: center;'> \r\n        <p> Aasif Rasool </p>\r\n        <p>Cell number : 082 448 3311</p>\r\n        <p>Email : u10218140@tuks.co.za</p>\r\n      </div>\r\n      <div class=\"mb-2\"style='display: block; text-align:center; word-break: break-all; justify-content: center;'>\r\n        <p> Ayesha Mohamed </p>\r\n        <p>Cell number : 067 742 8623</p>\r\n        <p>Email : u19093455@tuks.co.za</p>\r\n      </div>\r\n      <div class=\"mb-2\"style='display: block; text-align:center; word-break: break-all; justify-content: center;'>\r\n        <p>Mohammed Nadeem Vally</p>\r\n        <p>Cell number : 076 290 7264</p>\r\n        <p>Email : u17256292@tuks.co.za</p>\r\n      </div>\r\n      <div class=\"mb-2\"style='display: block; text-align:center; word-break: break-all; justify-content: center;'>\r\n        <p>Sumaya Essack</p>\r\n        <p>Cell number : 084 410 7869</p>\r\n        <p>Email : u18142762@tuks.co.za</p>\r\n      </div>\r\n      <div class=\"mb-2\"style='display: block; text-align:center; word-break: break-all; justify-content: center;'>\r\n        <p>Jawid Khan</p>\r\n        <p>Cell number : 071 047 7253</p>\r\n        <p>Email : u19327201@tuks.co.za</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map