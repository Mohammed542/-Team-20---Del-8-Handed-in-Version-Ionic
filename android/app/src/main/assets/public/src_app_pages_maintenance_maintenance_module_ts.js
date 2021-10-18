(self["webpackChunkaasifionic"] = self["webpackChunkaasifionic"] || []).push([["src_app_pages_maintenance_maintenance_module_ts"],{

/***/ 2518:
/*!*****************************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancePageRoutingModule": () => (/* binding */ MaintenancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _maintenance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance.page */ 1861);




const routes = [
    {
        path: '',
        component: _maintenance_page__WEBPACK_IMPORTED_MODULE_0__.MaintenancePage
    }
];
let MaintenancePageRoutingModule = class MaintenancePageRoutingModule {
};
MaintenancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaintenancePageRoutingModule);



/***/ }),

/***/ 4600:
/*!*********************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancePageModule": () => (/* binding */ MaintenancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance-routing.module */ 2518);
/* harmony import */ var _maintenance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.page */ 1861);







let MaintenancePageModule = class MaintenancePageModule {
};
MaintenancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenancePageRoutingModule
        ],
        declarations: [_maintenance_page__WEBPACK_IMPORTED_MODULE_1__.MaintenancePage]
    })
], MaintenancePageModule);



/***/ }),

/***/ 1861:
/*!*******************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancePage": () => (/* binding */ MaintenancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_maintenance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maintenance.page.html */ 5903);
/* harmony import */ var _maintenance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.page.scss */ 7120);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);



/* eslint-disable @typescript-eslint/dot-notation */





let MaintenancePage = class MaintenancePage {
    constructor(httpService, router, alertController) {
        this.httpService = httpService;
        this.router = router;
        this.alertController = alertController;
        this.spID = sessionStorage["ServiceProviderID"];
    }
    ngOnInit() {
        this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/Maintenance/getMaintenanceInfo/' + this.spID).subscribe(res => {
            this.maintenanceData = res;
            console.log(this.maintenanceData = res);
        });
    }
    ionViewWillEnter() {
        this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/Maintenance/getMaintenanceInfo/' + this.spID).subscribe(res => {
            this.maintenanceData = res;
            console.log(this.maintenanceData = res);
        });
    }
    setID(id, status) {
        localStorage.MaintenanceID = id;
        localStorage.MaintenanceStatus = status;
        this.router.navigate(['maintenancedetails']);
    }
    onShowPopUp() {
        this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Warning!',
            message: 'This maintenance has already been completed',
            buttons: [{
                    text: 'Ok',
                }
            ]
        }).then((alert) => alert.present());
    }
};
MaintenancePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
MaintenancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-maintenance',
        template: _raw_loader_maintenance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maintenance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaintenancePage);



/***/ }),

/***/ 7120:
/*!*********************************************************!*\
  !*** ./src/app/pages/maintenance/maintenance.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-title {\n  font-size: 20px;\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6Im1haW50ZW5hbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufSJdfQ== */");

/***/ }),

/***/ 5903:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenance/maintenance.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title> Maintenance </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let details of maintenanceData\">\r\n    <ion-card-header>\r\n      <ion-card-title\r\n        ><a (click)=\"details.Status === 'Completed' ? onShowPopUp() : setID(details.MaintenanceID, details.Status)\"\r\n          >{{details.BuildingName}}</a\r\n        ></ion-card-title\r\n      >\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <p><b>Maintenance Type:</b> {{details.Description}}</p>\r\n      <p><b>Maintenance Status:</b> {{details.Status}}</p>\r\n      <p><b>Date:</b> {{details.Date | date}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_maintenance_maintenance_module_ts.js.map