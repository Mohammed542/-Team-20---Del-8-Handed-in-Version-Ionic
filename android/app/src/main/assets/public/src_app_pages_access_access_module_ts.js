(self["webpackChunkaasifionic"] = self["webpackChunkaasifionic"] || []).push([["src_app_pages_access_access_module_ts"],{

/***/ 7863:
/*!*******************************************************!*\
  !*** ./src/app/pages/access/access-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessPageRoutingModule": () => (/* binding */ AccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _access_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access.page */ 7832);




const routes = [
    {
        path: '',
        component: _access_page__WEBPACK_IMPORTED_MODULE_0__.AccessPage
    }
];
let AccessPageRoutingModule = class AccessPageRoutingModule {
};
AccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccessPageRoutingModule);



/***/ }),

/***/ 7445:
/*!***********************************************!*\
  !*** ./src/app/pages/access/access.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessPageModule": () => (/* binding */ AccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _access_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-routing.module */ 7863);
/* harmony import */ var _access_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access.page */ 7832);







let AccessPageModule = class AccessPageModule {
};
AccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _access_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_access_page__WEBPACK_IMPORTED_MODULE_1__.AccessPage]
    })
], AccessPageModule);



/***/ }),

/***/ 7832:
/*!*********************************************!*\
  !*** ./src/app/pages/access/access.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessPage": () => (/* binding */ AccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_access_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./access.page.html */ 368);
/* harmony import */ var _access_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access.page.scss */ 7829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../access.service */ 2390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








let AccessPage = class AccessPage {
    constructor(service, router, formbulider, alertController) {
        this.service = service;
        this.router = router;
        this.formbulider = formbulider;
        this.alertController = alertController;
        this.loading = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        this.form = this.formbulider.group({
            Username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    login(e) {
        this.loading = true;
        this.service.Login(e.target.Username.value, e.target.Password.value).subscribe((response) => {
            if (response.Success && response.Result.ServiceProviderID) {
                console.log("ServiceProvider");
                sessionStorage["ServiceProviderID"] = response.Result.ServiceProviderID;
                sessionStorage["Name"] = response.Result.Name;
                sessionStorage["Surname"] = response.Result.Surname;
                sessionStorage["EmailAddress"] = response.Result.EmailAddress;
                sessionStorage["CellphoneNumber"] = response.Result.CellphoneNumber;
                sessionStorage["IDNumber"] = response.Result.IDNumber;
                sessionStorage["DateOfEmployment"] = response.Result.DateOfEmployment;
                sessionStorage["UserTypeID"] = response.Result.UserTypeID;
                sessionStorage["Password"] = response.Result.Password;
                this.router.navigate(["home"]);
            }
            else {
                this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Warning!',
                    message: 'This incorrect login details have been provided',
                    buttons: [{
                            text: 'Ok',
                        }
                    ]
                }).then((alert) => alert.present());
            }
            this.loading = false;
        });
    }
    route() {
        console.log("click");
        this.router.navigate(['reset-password']);
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
};
AccessPage.ctorParameters = () => [
    { type: _access_service__WEBPACK_IMPORTED_MODULE_2__.AccessService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-access',
        template: _raw_loader_access_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_access_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccessPage);



/***/ }),

/***/ 7829:
/*!***********************************************!*\
  !*** ./src/app/pages/access/access.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".passwordIcon {\n  /* font-size: 1rem !important; */\n  position: absolute;\n  top: 20px !important;\n  margin: 0 auto !important;\n  right: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTyxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQ1AiLCJmaWxlIjoiYWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZEljb24ge1xyXG4gICAgICAgLyogZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICB0b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICByaWdodDogMDtcclxuICAgICAgIHotaW5kZXg6IDk5OTtcclxuIH1cclxuIl19 */");

/***/ }),

/***/ 368:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/access/access.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div style=\"padding: 1em;\">\r\n    <div>\r\n      <img src=\"assets/logo.png\" alt=\"Prime Properties Logo Here\">\r\n    </div>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"login($event)\" style=\"text-align: center;\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Username</ion-label>\r\n        <ion-input placeholder=\"Username\" type=\"text\" placeholder=\"Username\" name=\"Username\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input formControlName=\"Password\" [type]=\"passwordType\" placeholder=\"Password\" name=\"Password\"></ion-input>\r\n        <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n      </ion-item>\r\n\r\n      <div style=\"margin-top: 2em;\">\r\n        <ion-button type=\"submit\" expand=\"block\" color=\"success\" style=\"margin-bottom: 2em;\" [disabled]=\"loading\">Login</ion-button>\r\n\r\n        <ion-button type=\"submit\" expand=\"block\" color=\"primary\" routerLink=\"/reset\" style=\"margin-bottom: 2em;\">Reset\r\n          Password</ion-button>\r\n      </div>\r\n      <a class=\"main-nav__link\" routerLink=\"/about\">About</a>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_access_access_module_ts.js.map