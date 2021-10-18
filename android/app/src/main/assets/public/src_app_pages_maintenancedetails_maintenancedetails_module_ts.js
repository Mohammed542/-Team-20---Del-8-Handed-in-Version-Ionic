(self["webpackChunkaasifionic"] = self["webpackChunkaasifionic"] || []).push([["src_app_pages_maintenancedetails_maintenancedetails_module_ts"],{

/***/ 9462:
/*!******************************************************************!*\
  !*** ./src/app/maintenancedetails/maintenancedetails.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancedetailsService": () => (/* binding */ MaintenancedetailsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let MaintenancedetailsService = class MaintenancedetailsService {
    constructor(http) {
        this.http = http;
    }
    getmaintenance(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/Maintenance/getBuildingMaintenance/' + id).toPromise();
    }
    addPhoto(obj) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/MaintenancePhotoes', obj);
    }
};
MaintenancedetailsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MaintenancedetailsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MaintenancedetailsService);



/***/ }),

/***/ 4926:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/maintenancedetails/maintenancedetails-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancedetailsPageRoutingModule": () => (/* binding */ MaintenancedetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _maintenancedetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenancedetails.page */ 6591);




const routes = [
    {
        path: '',
        component: _maintenancedetails_page__WEBPACK_IMPORTED_MODULE_0__.MaintenancedetailsPage
    }
];
let MaintenancedetailsPageRoutingModule = class MaintenancedetailsPageRoutingModule {
};
MaintenancedetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaintenancedetailsPageRoutingModule);



/***/ }),

/***/ 9551:
/*!***********************************************************************!*\
  !*** ./src/app/pages/maintenancedetails/maintenancedetails.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancedetailsPageModule": () => (/* binding */ MaintenancedetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _maintenancedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenancedetails-routing.module */ 4926);
/* harmony import */ var _maintenancedetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenancedetails.page */ 6591);







let MaintenancedetailsPageModule = class MaintenancedetailsPageModule {
};
MaintenancedetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maintenancedetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenancedetailsPageRoutingModule
        ],
        declarations: [_maintenancedetails_page__WEBPACK_IMPORTED_MODULE_1__.MaintenancedetailsPage]
    })
], MaintenancedetailsPageModule);



/***/ }),

/***/ 6591:
/*!*********************************************************************!*\
  !*** ./src/app/pages/maintenancedetails/maintenancedetails.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancedetailsPage": () => (/* binding */ MaintenancedetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_maintenancedetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maintenancedetails.page.html */ 5130);
/* harmony import */ var _maintenancedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenancedetails.page.scss */ 3980);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_maintenancedetails_maintenancedetails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/maintenancedetails/maintenancedetails.service */ 9462);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);



/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */







let MaintenancedetailsPage = class MaintenancedetailsPage {
    constructor(location, httpService, alertController, router, service) {
        this.location = location;
        this.httpService = httpService;
        this.alertController = alertController;
        this.router = router;
        this.service = service;
        this.isShown = false; // hidden by default
        this.progressShown = false;
        this.addProgressShown = true;
        this.status = '';
        this.object = {};
    }
    ngOnInit() {
        this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL + '/Maintenance/getBuildingMaintenance/' + localStorage.MaintenanceID).subscribe(res => {
            this.maintenanceData = res;
            this.status = localStorage.MaintenanceStatus;
            if (localStorage.MaintenanceStatus === 'In Progress') {
                this.showProgress();
                this.toggleShow();
            }
            console.log(this.maintenanceData = res);
        });
        this.resetForm();
        //    this.service.getmaintenance(localStorage.MaintenanceID).then (res => {
        //     this.maintenanceData = res as string [];
        //     console.log(this.maintenanceData = res as string []);
        // });
    }
    ionViewWillEnter() {
        this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL + '/Maintenance/getBuildingMaintenance/' + localStorage.MaintenanceID).subscribe(res => {
            this.maintenanceData = res;
            console.log(this.maintenanceData = res);
        });
        this.resetForm();
    }
    exit() {
        this.location.back();
    }
    exit2() {
        this.progressShown = false;
        this.addProgressShown = true;
        window.location.reload();
    }
    toggleShow() {
        this.isShown = !this.isShown;
    }
    showProgress() {
        this.progressShown = true;
        this.addProgressShown = false;
    }
    confirmMarkProgress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL + '/Maintenances/markInProgress/' + localStorage.MaintenanceID).subscribe(res => {
                console.log('Status has been changed!');
            });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL + '/Maintenances/markProgress/' + localStorage.MaintenanceID).subscribe(res => {
                console.log('Status has been changed!');
            });
            this.submit();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Maintenance Completed',
                message: 'Your service has been marked as completed and will be sent to the landlord for finalisation.',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['home']);
                        }
                    }]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    file(i) {
        if (i.files && i.files[0]) {
            const r = new FileReader();
            r.onload = (e) => {
                console.log(e.target.result);
                this.service.photoData.MaintenancePhoto1 = e.target.result;
                this.object.url = e.target.result;
            };
            r.readAsDataURL(i.files[0]);
        }
    }
    resetForm() {
        this.service.photoData = {
            MaintenancePhotoID: 0,
            MaintenanceID: localStorage.MaintenanceID,
            MaintenancePhoto1: ''
        };
    }
    submit() {
        this.service.addPhoto(this.service.photoData).subscribe((res) => {
            console.log(res);
            this.resetForm();
        });
    }
};
MaintenancedetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_maintenancedetails_maintenancedetails_service__WEBPACK_IMPORTED_MODULE_2__.MaintenancedetailsService }
];
MaintenancedetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-maintenancedetails',
        template: _raw_loader_maintenancedetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maintenancedetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MaintenancedetailsPage);



/***/ }),

/***/ 3980:
/*!***********************************************************************!*\
  !*** ./src/app/pages/maintenancedetails/maintenancedetails.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".centre {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\np {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJtYWludGVuYW5jZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */");

/***/ }),

/***/ 5130:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maintenancedetails/maintenancedetails.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title> Maintenance Details </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"maintenanceData\">\r\n  <ion-card style=\"border-style: solid; margin-top: 5%\">\r\n    <ion-item>\r\n      <ion-label>Building Name: {{maintenanceData.BuildingName}}</ion-label>\r\n      <!-- Autopopulated information -->\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Maintenance Type: {{maintenanceData.Description}}</ion-label>\r\n      <!-- Autopopulated information -->\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Amount Quoted: {{maintenanceData.AmountQuoted}}</ion-label>\r\n      <!-- Autopopulated information -->\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Date Employed: {{maintenanceData.DateofEmployment | date}}</ion-label>\r\n      <!-- Autopopulated information -->\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"progressShown\">\r\n      <ion-item>\r\n        <ion-label>Mark as Complete:</ion-label>\r\n        <ion-toggle\r\n          color=\"primary\"\r\n          [(ngModel)]=\"isShown\"\r\n          (click)=\"toggleShow()\"\r\n          [disabled]=\"status === 'In Progress'\"\r\n        ></ion-toggle>\r\n      </ion-item>\r\n\r\n      <br /><br />\r\n\r\n      <div *ngIf=\"isShown\">\r\n        <p class=\"centre\">\r\n          <b><u>Please upload a photo of the completed Maintenance:</u> </b>\r\n        </p>\r\n\r\n        <div class=\"centre\">\r\n          <!-- <img\r\n            src=\"https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png\"\r\n            alt=\"Upload Icon\"\r\n            *ngIf=\"!object.url\"\r\n            style=\"width: 140px; height: 140px\"\r\n          /><br />\r\n\r\n          <img\r\n            *ngIf=\"object.url\"\r\n            [src]=\"object.url\"\r\n            class=\"image\"\r\n            name=\"MaintenancePhoto1\"\r\n            id=\"MaintenancePhoto1\"\r\n            #MaintenancePhoto1=\"ngModel\"\r\n            [(ngModel)]=\"service.photoData.MaintenancePhoto1\"\r\n          /> -->\r\n\r\n          <input type=\"file\" (change)=\"file($event.target)\" accept=\"image/*\"/>\r\n          <img\r\n          *ngIf=\"object.url\"\r\n          [src]=\"object.url\"\r\n          class=\"image\">\r\n\r\n        </div>\r\n        <br />\r\n        <ion-button\r\n          expand=\"block\"\r\n          color=\"dark\"\r\n          fill=\"outline\"\r\n          rooterDirection=\"root\"\r\n          (click)=\"confirmCompletion()\"\r\n          >Confirm Completion</ion-button\r\n        >\r\n        <br />\r\n      </div>\r\n\r\n      <ion-button\r\n        expand=\"block\"\r\n        color=\"dark\"\r\n        fill=\"outline\"\r\n        rooterDirection=\"root\"\r\n        (click)=\"confirmMarkProgress()\"\r\n        [disabled]=\"isShown\"\r\n        >Mark In Progress</ion-button\r\n      ><br />\r\n    <ion-button expand=\"block\" color=\"danger\" fill=\"outline\" (click)=\"exit2()\">Cancel</ion-button>\r\n    <br>\r\n  </div>\r\n  </ion-card>\r\n\r\n  <!--\r\n<div *ngIf=\"progressShown\">\r\n  <ion-button expand=\"block\" color=\"dark\" fill=\"outline\" routerLink=\"/maintenanceprogress\" rooterDirection=\"root\" (click)=\"confirmMarkProgress()\">Mark Maintenance In Progress</ion-button><br>\r\n</div> -->\r\n\r\n\r\n\r\n  <div *ngIf=\"addProgressShown\">\r\n    <br /><br />\r\n    <ion-button\r\n      expand=\"block\"\r\n      color=\"dark\"\r\n      fill=\"outline\"\r\n      rooterDirection=\"root\"\r\n      (click)=\"showProgress()\"\r\n      >Add Maintenance Progress</ion-button\r\n    ><br />\r\n    <ion-button expand=\"block\" color=\"danger\" fill=\"outline\" (click)=\"exit()\">Exit</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_maintenancedetails_maintenancedetails_module_ts.js.map