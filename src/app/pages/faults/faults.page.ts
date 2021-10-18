import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faults',
  templateUrl: './faults.page.html',
  styleUrls: ['./faults.page.scss'],
})
export class FaultsPage implements OnInit {

  faultData: string[];

  constructor(private httpService: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpService.get(environment.apiURL + '/Fault/getFaultInfo/' + 1).subscribe (res => {
      this.faultData = res as string [];
      console.log(this.faultData = res as string []);
  });
}

setID(id){
  localStorage.FaultID =id;
}


}
