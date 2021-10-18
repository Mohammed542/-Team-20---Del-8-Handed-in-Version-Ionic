/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-faultprogress',
  templateUrl: './faultprogress.page.html',
  styleUrls: ['./faultprogress.page.scss'],
})
export class FaultprogressPage implements OnInit {

  
  isShown = false ; // hidden by default
  constructor(public alertController: AlertController, public router: Router) { }

  ngOnInit() {
  }
  toggleShow() {

    this.isShown = ! this.isShown;

    }

    async confirmMarkProgress() {
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
        buttons: [ {
      text: 'OK',
      handler: () => {
        this.router.navigate(['menu/main']);
      }
        }
      ]
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
     
    }
}
