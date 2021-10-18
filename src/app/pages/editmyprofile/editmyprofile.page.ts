import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editmyprofile',
  templateUrl: './editmyprofile.page.html',
  styleUrls: ['./editmyprofile.page.scss'],
})
export class EditmyprofilePage implements OnInit {

  serviceProviderData: string[];
  serviceProviderD: any;

  serviceP = {
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
  }

  spID: number = sessionStorage["ServiceProviderID"];

  form: FormGroup;

  constructor(private httpService: HttpClient, private router: Router, private formBuilder: FormBuilder, private alertController: AlertController, private location: Location) { }

  ngOnInit() {
    this.httpService.get(environment.apiURL + '/ServiceProvider/getServiceProviderInfo/' + this.spID).subscribe((res) => {
      this.serviceProviderData = res as string[];
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

  async saveChanges() {
    const apiURL = environment.apiURL + "/ServiceProvider/PutServiceProviderInfo/" + this.serviceP.ServiceProviderID;
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
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    this.httpService.post(apiURL, this.serviceP, httpOptions).subscribe((res) => {
      console.log(res);
    });

    let alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Your profile has been updated.',
      buttons: [
        {
          text: 'Confirm',
        }
      ]
    });

    await alert.present();

    alert.onDidDismiss().then((data) => {
      //this.exit();
      this.router.navigate(['myprofile']);
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
}
