import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fphoto } from '../pages/faultdetails/Fphoto';
import { Mphoto } from '../pages/maintenancedetails/mphoto';

@Injectable({
  providedIn: 'root'
})
export class MaintenancedetailsService {
  photoData: Mphoto;
  photofaultData: Fphoto;

  constructor(private http: HttpClient) { }
  getmaintenance(id){
    return this.http.get(environment.apiURL + '/Maintenance/getBuildingMaintenance/'+id).toPromise();
  }

  addPhoto(obj: Mphoto) {
    return this.http.post(environment.apiURL + '/MaintenancePhotoes', obj);
  }

}
