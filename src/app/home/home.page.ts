import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  serviceProviderData: string[];
  today = new Date().toLocaleDateString();
  maintenanceData: string[];
  mdLenght: boolean = false;
  mdAchieved: boolean = false;

  spID: number =  sessionStorage["ServiceProviderID"];

  constructor(private httpService: HttpClient, private router: Router) {}

  ngOnInit(){
    this.httpService.get(environment.apiURL + '/ServiceProvider/getServiceProviderInfo/' + this.spID).subscribe (res => {
      this.serviceProviderData = res as string [];
      console.log(this.serviceProviderData = res as string []);
    });

    this.httpService.get(environment.apiURL + '/Maintenance/getMaintenanceInProgress/' + this.spID).subscribe (res => {
      this.maintenanceData = res as string [];
      console.log(this.maintenanceData = res as string []);

      if(this.maintenanceData.length == 0){
        this.mdLenght == false;
      }
      else{
        this.mdLenght = true;
      }
    });

    // this.httpService.get('https://localhost:44399/api/Maintenance/getMaintenanceAchievedInfo/' + this.spIDssss).subscribe (res => {
    //   this.maintenanceData = res as string [];
    //   console.log(this.maintenanceData = res as string []);

    //   if(this.maintenanceData.length == 0){
    //     this.mdAchieved == false;
    //   }
    //   else{
    //     this.mdAchieved = true;
    //   }
    // });
  }

  setID(id){
    localStorage.MaintenanceID = id;
  }
}


