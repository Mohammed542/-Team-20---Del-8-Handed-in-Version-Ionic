(self["webpackChunkaasifionic"] = self["webpackChunkaasifionic"] || []).push([["src_app_pages_editmyprofile_editmyprofile_module_ts"],{

/***/ 4272:
/*!*********************************************************************!*\
  !*** ./src/app/pages/editmyprofile/editmyprofile-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditmyprofilePageRoutingModule": () => (/* binding */ EditmyprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _editmyprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editmyprofile.page */ 2929);




const routes = [
    {
        path: '',
        component: _editmyprofile_page__WEBPACK_IMPORTED_MODULE_0__.EditmyprofilePage
    }
];
let EditmyprofilePageRoutingModule = class EditmyprofilePageRoutingModule {
};
EditmyprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditmyprofilePageRoutingModule);



/***/ }),

/***/ 1710:
/*!*************************************************************!*\
  !*** ./src/app/pages/editmyprofile/editmyprofile.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditmyprofilePageModule": () => (/* binding */ EditmyprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _editmyprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editmyprofile-routing.module */ 4272);
/* harmony import */ var _editmyprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editmyprofile.page */ 2929);







let EditmyprofilePageModule = class EditmyprofilePageModule {
};
EditmyprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editmyprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditmyprofilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_editmyprofile_page__WEBPACK_IMPORTED_MODULE_1__.EditmyprofilePage]
    })
], EditmyprofilePageModule);



/***/ }),

/***/ 2929:
/*!***********************************************************!*\
  !*** ./src/app/pages/editmyprofile/editmyprofile.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditmyprofilePage": () => (/* binding */ EditmyprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_editmyprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editmyprofile.page.html */ 6299);
/* harmony import */ var _editmyprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editmyprofile.page.scss */ 2122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);










let EditmyprofilePage = class EditmyprofilePage {
    constructor(httpService, router, formBuilder, alertController, location) {
        this.httpService = httpService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.location = location;
        this.serviceP = {
            ServiceProviderID: 0,
            Name: "",
            Surname: "",
            CellphoneNumber: "",
            IDNumber: "",
            EmailAddress: "",
            //ServiceProviderCategoryID: 0,
            ServiceProviderCategory: "",
            //ServiceProviderStatusID: 0,
            ServiceProviderStatus: "",
            DateOfEmployment: "",
            UserTypeID: 0,
            Password: ""
        };
        this.spID = sessionStorage["ServiceProviderID"];
    }
    ngOnInit() {
        this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/ServiceProvider/getServiceProviderInfo/' + this.spID).subscribe((res) => {
            this.serviceProviderData = res;
            this.serviceProviderD = res;
            this.serviceP.ServiceProviderID = this.serviceProviderD[0].ServiceProviderID;
            this.serviceP.Name = this.serviceProviderD[0].Name;
            this.serviceP.Surname = this.serviceProviderD[0].Surname;
            this.serviceP.CellphoneNumber = this.serviceProviderD[0].CellphoneNumber;
            this.serviceP.IDNumber = this.serviceProviderD[0].IDNumber;
            this.serviceP.EmailAddress = this.serviceProviderD[0].EmailAddress;
            //this.serviceP.ServiceProviderCategoryID = this.serviceProviderD[0].Description;
            this.serviceP.ServiceProviderCategory = this.serviceProviderD[0].Description;
            //this.serviceP.ServiceProviderStatusID = this.serviceProviderD[0].Status;
            this.serviceP.ServiceProviderStatus = this.serviceProviderD[0].Status;
            this.serviceP.DateOfEmployment = this.serviceProviderD[0].Date;
            this.serviceP.UserTypeID = this.serviceProviderD[0].UserTypeID;
            this.serviceP.Password = sessionStorage["Password"];
            console.log("serviceProviderData", this.serviceProviderData);
            console.log("serviceProviderD", this.serviceProviderD);
            console.log("serviceP", this.serviceP);
            console.log("res", res);
        });
        // console.log(this.serviceProviderData);
        // console.log(this.serviceProviderData[0]);
        // this.form = this.formBuilder.group({
        //   Name: [this.serviceP.Name ,Validators.required],
        //   Surname: [this.serviceP.Surname ,Validators.required],
        //   CellphoneNumber: [this.serviceP.CellphoneNumber ,Validators.required],
        //   IDNumber: [this.serviceP.IDNumber ,Validators.required],
        //   Description: [this.serviceP.Description ,Validators.required],
        //   EmailAddress: [this.serviceP.EmailAddress ,Validators.required],
        //   Date: [this.serviceP.Date ,Validators.required],
        //   Status: [this.serviceP.Status ,Validators.required]
        // });
    }
    saveChanges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + "/ServiceProvider/PutServiceProviderInfo/" + this.serviceP.ServiceProviderID;
            // const httpOptions = {
            //   headers: new HttpHeaders({
            //     'Content-type': 'application/json',
            //     'Accept': 'application/json',
            //     'Access-Control-Allow-Origin': '*'
            //   })
            // };
            // var headers = new HttpHeaders();
            // headers.append("Accept", 'application/json');
            // headers.append("Content-Type", 'application/json');
            // const httpOptions = headers;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                    'Content-type': 'application/json'
                })
            };
            this.httpService.post(apiURL, this.serviceP, httpOptions).subscribe((res) => {
                console.log(res);
            });
            let alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Your profile has been updated.',
                buttons: [
                    {
                        text: 'Confirm',
                    }
                ]
            });
            yield alert.present();
            alert.onDidDismiss().then((data) => {
                //this.exit();
                this.router.navigate(['myprofile']);
            });
        });
    }
    changeName(event) {
        console.log(event.target.value);
        this.serviceP.Name = event.target.value;
        console.log(this.serviceP.Name);
    }
    changeSurname(event) {
        console.log(event.target.value);
        this.serviceP.Surname = event.target.value;
        console.log(this.serviceP.Surname);
    }
    changeCell(event) {
        console.log(event.target.value);
        this.serviceP.CellphoneNumber = event.target.value;
        console.log(this.serviceP.CellphoneNumber);
    }
    changeID(event) {
        console.log(event.target.value);
        this.serviceP.IDNumber = event.target.value;
        console.log(this.serviceP.IDNumber);
    }
    changeCategory(event) {
        console.log(event.target.value);
        this.serviceP.ServiceProviderCategory = event.target.value;
        console.log(this.serviceP.ServiceProviderCategory);
    }
    changeEmail(event) {
        console.log(event.target.value);
        this.serviceP.EmailAddress = event.target.value;
        console.log(this.serviceP.EmailAddress);
    }
    changeDate(event) {
        console.log(event.target.value);
        this.serviceP.DateOfEmployment = event.target.value;
        console.log(this.serviceP.DateOfEmployment);
    }
    changeStatus(event) {
        console.log(event.target.value);
        this.serviceP.ServiceProviderStatus = event.target.value;
        console.log(this.serviceP.ServiceProviderStatus);
    }
    exit() {
        this.location.back();
    }
    exit2() {
        window.location.reload();
    }
};
EditmyprofilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location }
];
EditmyprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-editmyprofile',
        template: _raw_loader_editmyprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editmyprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditmyprofilePage);



/***/ }),

/***/ 2122:
/*!*************************************************************!*\
  !*** ./src/app/pages/editmyprofile/editmyprofile.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRteXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJlZGl0bXlwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ 6299:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editmyprofile/editmyprofile.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title> Edit My Profile </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let details of serviceProviderData\">\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        <p>{{ details.Name }} {{ details.Surname }} 's Profile</p>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <!--<form [formGroup]=\"form\" (ngSubmit)=\"saveChanges(form.value)\">\r\n      <ion-card-content>\r\n        <p><b>Name:</b></p>\r\n        <ion-input value=\"{{ details.Name }}\" formControlName=\"Name\"></ion-input>\r\n\r\n        <p><b>Surame:</b></p>\r\n        <ion-input value=\"{{ details.Surname }}\" formControlName=\"Surname\"></ion-input>\r\n\r\n        <p><b>Cellphone Number:</b></p>\r\n        <ion-input value=\"{{ details.CellphoneNumber }}\" formControlName=\"CellphoneNumber\"></ion-input>\r\n\r\n        <p><b>ID Number:</b></p>\r\n        <ion-input value=\"{{ details.IDNumber }}\" formControlName=\"IDNumber\"></ion-input>\r\n\r\n        <p><b>Category Name:</b></p>\r\n        <ion-input value=\"{{ details.Description }}\" formControlName=\"Description\"></ion-input>\r\n\r\n        <p><b>Email Address:</b></p>\r\n        <ion-input value=\"{{ details.EmailAddress }}\" formControlName=\"EmailAddress\"></ion-input>\r\n\r\n        <p><b>Date Employed:</b></p>\r\n        <ion-input value=\"{{details.Date | date}}\" formControlName=\"Date\"></ion-input>\r\n\r\n        <p><b>Status:</b></p>\r\n        <ion-input formControlName=\"Status\" value=\"{{ details.Status }}\"></ion-input>\r\n\r\n        <ion-button\r\n          expand=\"block\"\r\n          color=\"dark\"\r\n          fill=\"outline\"\r\n          rooterDirection=\"root\">\r\n          Save Changes\r\n        </ion-button>\r\n      </ion-card-content>\r\n    </form>-->\r\n\r\n      <ion-card-content>\r\n        <p><b>Name:</b></p>\r\n        <ion-input value=\"{{ details.Name }}\" (ionInput)=\"changeName($event)\"></ion-input>\r\n\r\n        <p><b>Surame:</b></p>\r\n        <ion-input value=\"{{ details.Surname }}\" (ionInput)=\"changeSurname($event)\"></ion-input>\r\n\r\n        <p><b>Cellphone Number:</b></p>\r\n        <ion-input value=\"{{ details.CellphoneNumber }}\" (ionInput)=\"changeCell($event)\"></ion-input>\r\n\r\n        <p><b>ID Number:</b></p>\r\n        <ion-input value=\"{{ details.IDNumber }}\" (ionInput)=\"changeID($event)\" disabled></ion-input>\r\n\r\n        <p><b>Category Name:</b></p>\r\n        <ion-input value=\"{{ details.Description }}\" (ionInput)=\"changeCategory($event)\" disabled></ion-input>\r\n\r\n        <p><b>Email Address:</b></p>\r\n        <ion-input value=\"{{ details.EmailAddress }}\" (ionInput)=\"changeEmail($event)\" disabled></ion-input>\r\n\r\n        <p><b>Date Employed:</b></p>\r\n        <ion-input value=\"{{details.Date | date}}\" (ionInput)=\"changeDate($event)\" disabled></ion-input>\r\n\r\n        <p><b>Status:</b></p>\r\n        <ion-input value=\"{{ details.Status }}\" (ionInput)=\"changeStatus($event)\" disabled></ion-input>\r\n\r\n        <ion-button\r\n          expand=\"block\"\r\n          color=\"dark\"\r\n          fill=\"outline\"\r\n          rooterDirection=\"root\"\r\n          (click)=\"saveChanges()\">\r\n          Save Changes\r\n        </ion-button>\r\n        <ion-button expand=\"block\" color=\"danger\" fill=\"outline\" (click)=\"exit()\">Cancel</ion-button>\r\n      </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editmyprofile_editmyprofile_module_ts.js.map