/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MaintenancedetailsService } from 'src/app/maintenancedetails/maintenancedetails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maintenancedetails',
  templateUrl: './maintenancedetails.page.html',
  styleUrls: ['./maintenancedetails.page.scss'],
})
export class MaintenancedetailsPage implements OnInit {
  maintenanceData: string[];
  isShown = false; // hidden by default
  progressShown = false;
  addProgressShown = true;
  status: string = '';

  constructor(private location: Location, private httpService: HttpClient, public alertController: AlertController, public router: Router, public service: MaintenancedetailsService) { }

  ngOnInit() {
    this.httpService.get(environment.apiURL + '/Maintenance/getBuildingMaintenance/' + localStorage.MaintenanceID).subscribe(res => {
      this.maintenanceData = res as string[];
      this.status = localStorage.MaintenanceStatus;
      if(localStorage.MaintenanceStatus === 'In Progress') {
        this.showProgress();
        this.toggleShow();
      }
      console.log(this.maintenanceData = res as string[]);
    });
    this.resetForm();

    //    this.service.getmaintenance(localStorage.MaintenanceID).then (res => {
    //     this.maintenanceData = res as string [];
    //     console.log(this.maintenanceData = res as string []);
    // });
  }

  ionViewWillEnter() {
    this.httpService.get(environment.apiURL + '/Maintenance/getBuildingMaintenance/' + localStorage.MaintenanceID).subscribe(res => {
      this.maintenanceData = res as string[];
      console.log(this.maintenanceData = res as string[]);
    });
    this.resetForm();
  }

  exit(){
    this.location.back();
  }

  exit2(){
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

  async confirmMarkProgress() {
    this.httpService.get(environment.apiURL + '/Maintenances/markInProgress/' + localStorage.MaintenanceID).subscribe(res => {
      console.log('Status has been changed!')

    });
    const alert = await this.alertController.create({
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

    await alert.present();
  }

  async confirmCompletion() {

    this.httpService.get(environment.apiURL + '/Maintenances/markProgress/' + localStorage.MaintenanceID).subscribe(res => {
      console.log('Status has been changed!')

    });
    this.submit();

    const alert = await this.alertController.create({
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

    await alert.present();
  }

  async complete() {
    const alert = await this.alertController.create({
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

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }


  public object: any = {};

  file(i) {
    if (i.files && i.files[0]) {
      const r = new FileReader();
      r.onload = (e: any) => {
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
    }
  }
  submit() {
    this.service.addPhoto(this.service.photoData).subscribe((res) => {
      console.log(res)
      this.resetForm()
    });
  }
}
