/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

  maintenanceData: string[];

  spID: number = sessionStorage["ServiceProviderID"];

  constructor(private httpService: HttpClient, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.httpService.get(environment.apiURL + '/Maintenance/getMaintenanceInfo/' + this.spID).subscribe(res => {
      this.maintenanceData = res as string[];
      console.log(this.maintenanceData = res as string[]);
    });
  }

  ionViewWillEnter() {
    this.httpService.get(environment.apiURL + '/Maintenance/getMaintenanceInfo/' + this.spID).subscribe(res => {
      this.maintenanceData = res as string[];
      console.log(this.maintenanceData = res as string[]);
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
      buttons: [ {
          text: 'Ok',

        }
      ]
    }).then((alert) => alert.present());
  }

}
