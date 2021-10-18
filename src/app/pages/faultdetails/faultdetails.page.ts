import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MaintenancedetailsService } from 'src/app/maintenancedetails/maintenancedetails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faultdetails',
  templateUrl: './faultdetails.page.html',
  styleUrls: ['./faultdetails.page.scss'],
})
export class FaultdetailsPage implements OnInit {
  faultData: string[];
  isShown = false; // hidden by default
  progressShown = false;
  addProgressShown = true;

  constructor(private location: Location, private httpService: HttpClient, public alertController: AlertController, public router: Router, public service: MaintenancedetailsService) { }

  ngOnInit() {
    this.httpService.get(environment.apiURL + '/Fault/getUnitFault/' + localStorage.FaultID).subscribe(res => {
      this.faultData = res as string[];
      console.log(this.faultData = res as string[]);
    });
    this.resetForm();
  }

  exit(){
    this.location.back();
  }

  toggleShow() {

    this.isShown = !this.isShown;

  }
  showProgress() {
    this.progressShown = true;
    this.addProgressShown = false;

  }

  async confirmMarkProgress() {
    this.httpService.get(environment.apiURL + '/Fault/markInProgress/' + localStorage.FaultID).subscribe(res => {
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

    this.httpService.get(environment.apiURL + '/Fault/markProgress/' + localStorage.FaultID).subscribe(res => {
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
      header: 'Fault Completed',
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
        this.service.photofaultData.FaultPhoto1 = e.target.result;
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
