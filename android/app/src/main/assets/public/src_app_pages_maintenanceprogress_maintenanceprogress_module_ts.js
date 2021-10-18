(self["webpackChunkaasifionic"] = self["webpackChunkaasifionic"] || []).push([["src_app_pages_maintenanceprogress_maintenanceprogress_module_ts"],{

/***/ 3859:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/maintenanceprogress/maintenanceprogress-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceprogressPageRoutingModule": () => (/* binding */ MaintenanceprogressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _maintenanceprogress_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenanceprogress.page */ 7609);




const routes = [
    {
        path: '',
        component: _maintenanceprogress_page__WEBPACK_IMPORTED_MODULE_0__.MaintenanceprogressPage
    }
];
let MaintenanceprogressPageRoutingModule = class MaintenanceprogressPageRoutingModule {
};
MaintenanceprogressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaintenanceprogressPageRoutingModule);



/***/ }),

/***/ 9922:
/*!*************************************************************************!*\
  !*** ./src/app/pages/maintenanceprogress/maintenanceprogress.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceprogressPageModule": () => (/* binding */ MaintenanceprogressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _maintenanceprogress_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenanceprogress-routing.module */ 3859);
/* harmony import */ var _maintenanceprogress_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenanceprogress.page */ 7609);







let MaintenanceprogressPageModule = class MaintenanceprogressPageModule {
};
MaintenanceprogressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maintenanceprogress_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenanceprogressPageRoutingModule
        ],
        declarations: [_maintenanceprogress_page__WEBPACK_IMPORTED_MODULE_1__.MaintenanceprogressPage]
    })
], MaintenanceprogressPageModule);



/***/ }),

/***/ 7609:
/*!***********************************************************************!*\
  !*** ./src/app/pages/maintenanceprogress/maintenanceprogress.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceprogressPage": () => (/* binding */ MaintenanceprogressPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_maintenanceprogress_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maintenanceprogress.page.html */ 4752);
/* harmony import */ var _maintenanceprogress_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenanceprogress.page.scss */ 1580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);



/* eslint-disable no-trailing-spaces */



let MaintenanceprogressPage = class MaintenanceprogressPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
        this.isShown = false; // hidden by default
    }
    ngOnInit() {
    }
    toggleShow() {
        this.isShown = !this.isShown;
    }
    confirmMarkProgress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Your service will be submitted as "In Progress".',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Confirm',
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmCompletion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Your service will be submitted as "Complete".',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Confirm',
                        handler: () => {
                            this.complete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    complete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Maintenance Completed',
                message: 'Your service has been marked as completed and will be sent to the landlord for finalisation.',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['menu/main']);
                        }
                    }]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
};
MaintenanceprogressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
MaintenanceprogressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-maintenanceprogress',
        template: _raw_loader_maintenanceprogress_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maintenanceprogress_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaintenanceprogressPage);



/***/ }),

/***/ 1580:
/*!*************************************************************************!*\
  !*** ./src/app/pages/maintenanceprogress/maintenanceprogress.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".centre {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\np {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlcHJvZ3Jlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDSSxlQUFBO0FBQ04iLCJmaWxlIjoibWFpbnRlbmFuY2Vwcm9ncmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ 4752:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenanceprogress/maintenanceprogress.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Maintenance Details\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button ></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card  style=\"border-style: solid; margin-top: 5%\">\r\n    <ion-item  >\r\n      <ion-label >Building Name:</ion-label>\r\n      <!-- Autopopulated information -->\r\n    </ion-item>\r\n  \r\n  \r\n \r\n    <ion-item  >\r\n      <ion-label >Maintenance Type:</ion-label>\r\n      <!-- Autopopulated information -->\r\n    </ion-item>\r\n\r\n\r\n    <ion-item  >\r\n      <ion-label >Amount Quoted:</ion-label>\r\n      <!-- Autopopulated information -->\r\n    </ion-item>\r\n\r\n    <ion-item  >\r\n      <ion-label >Date:</ion-label>\r\n    <!-- Autopopulated information -->\r\n    </ion-item>\r\n    <ion-item  >\r\n      <ion-label >Mark Maintenance as Complete:</ion-label>\r\n      <ion-toggle color=\"primary\" (click)=\"toggleShow()\"></ion-toggle>\r\n    </ion-item><br><br>\r\n\r\n\r\n    <ion-button expand=\"block\" color=\"dark\" fill=\"outline\" routerLink=\"/maintenanceprogress\" rooterDirection=\"root\" (click)=\"confirmMarkProgress()\">Mark Maintenance In Progress</ion-button><br>\r\n  </ion-card>\r\n\r\n  <div *ngIf=\"isShown\">\r\n  <p class=\"centre\"><b><u>Please upload a photo of the completed Maintenance:</u> </b></p>\r\n\r\n  <div class=\"centre\">\r\n\r\n \r\n  <img src=\"https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png\" alt=\"\" style=\"width: 150px; height: 150px;\"><br>\r\n  <ion-button size=\"small\">Select Files</ion-button><br>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Date of Completion</ion-label>\r\n    <ion-input type=\"date\"></ion-input>\r\n  </ion-item><br>\r\n  <ion-button expand=\"block\" color=\"dark\" fill=\"outline\" routerLink=\"/maintenanceprogress\" rooterDirection=\"root\" (click)=\"confirmCompletion()\">Confirm Completion</ion-button>\r\n</div>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_maintenanceprogress_maintenanceprogress_module_ts.js.map