import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  serviceProviderData: string[];

  spID: number = sessionStorage["ServiceProviderID"];

  constructor(private httpService: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpService.get(environment.apiURL + '/ServiceProvider/getServiceProviderInfo/' + this.spID).subscribe (res => {
      this.serviceProviderData = res as string [];
      console.log(this.serviceProviderData = res as string []);
    });
  }

  ionViewWillEnter() {
    this.httpService.get(environment.apiURL + '/ServiceProvider/getServiceProviderInfo/' + this.spID).subscribe (res => {
      this.serviceProviderData = res as string [];
      console.log(this.serviceProviderData = res as string []);
    });
  }
  editProfileRequest(id){
    localStorage.ServiceProviderID =id;
    console.log("Clicked edit");
  }
}
