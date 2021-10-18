(self["webpackChunkaasifionic"] = self["webpackChunkaasifionic"] || []).push([["src_app_pages_myprofile_myprofile_module_ts"],{

/***/ 3430:
/*!*************************************************************!*\
  !*** ./src/app/pages/myprofile/myprofile-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyprofilePageRoutingModule": () => (/* binding */ MyprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _myprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myprofile.page */ 1338);




const routes = [
    {
        path: '',
        component: _myprofile_page__WEBPACK_IMPORTED_MODULE_0__.MyprofilePage
    }
];
let MyprofilePageRoutingModule = class MyprofilePageRoutingModule {
};
MyprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyprofilePageRoutingModule);



/***/ }),

/***/ 7722:
/*!*****************************************************!*\
  !*** ./src/app/pages/myprofile/myprofile.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyprofilePageModule": () => (/* binding */ MyprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myprofile-routing.module */ 3430);
/* harmony import */ var _myprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myprofile.page */ 1338);







let MyprofilePageModule = class MyprofilePageModule {
};
MyprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyprofilePageRoutingModule
        ],
        declarations: [_myprofile_page__WEBPACK_IMPORTED_MODULE_1__.MyprofilePage]
    })
], MyprofilePageModule);



/***/ }),

/***/ 1338:
/*!***************************************************!*\
  !*** ./src/app/pages/myprofile/myprofile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyprofilePage": () => (/* binding */ MyprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_myprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myprofile.page.html */ 9994);
/* harmony import */ var _myprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myprofile.page.scss */ 1868);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);







let MyprofilePage = class MyprofilePage {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.spID = sessionStorage["ServiceProviderID"];
    }
    ngOnInit() {
        this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/ServiceProvider/getServiceProviderInfo/' + this.spID).subscribe(res => {
            this.serviceProviderData = res;
            console.log(this.serviceProviderData = res);
        });
    }
    ionViewWillEnter() {
        this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/ServiceProvider/getServiceProviderInfo/' + this.spID).subscribe(res => {
            this.serviceProviderData = res;
            console.log(this.serviceProviderData = res);
        });
    }
    editProfileRequest(id) {
        localStorage.ServiceProviderID = id;
        console.log("Clicked edit");
    }
};
MyprofilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
MyprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-myprofile',
        template: _raw_loader_myprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyprofilePage);



/***/ }),

/***/ 1868:
/*!*****************************************************!*\
  !*** ./src/app/pages/myprofile/myprofile.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9994:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myprofile/myprofile.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      My Profile\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-card *ngFor=\"let details of serviceProviderData\"> \r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        <p>{{ details.Name }} {{ details.Surname }}'s Profile</p>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      <p><b>Name:</b> {{details.Name}}</p>\r\n      <p><b>Surame:</b> {{details.Surname}}</p>\r\n      <p><b>Cellphone Number:</b> {{details.CellphoneNumber}}</p>\r\n      <p><b>ID Number:</b> {{details.IDNumber}}</p>\r\n      <p><b>Category Name:</b> {{details.Description}}</p>\r\n      <p><b>Email Address:</b> {{details.EmailAddress}}</p>\r\n      <p><b>Date Employed:</b> {{details.Date | date}}</p>\r\n      <p><b>Status:</b> {{details.Status}}</p>\r\n    </ion-card-content>\r\n\r\n    <ion-button\r\n      expand=\"block\"\r\n      color=\"dark\"\r\n      fill=\"outline\"\r\n      rooterDirection=\"root\"\r\n      (click)=\"editProfileRequest(details.ServiceProviderID)\"\r\n      routerLink=\"/editmyprofile\">\r\n      Edit My Profile\r\n    </ion-button>\r\n\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_myprofile_myprofile_module_ts.js.map