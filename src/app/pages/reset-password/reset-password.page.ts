import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';  

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(private service: AccessService,  private router: Router,  private formbulider: FormBuilder) { }

  user : any;

  ngOnInit() {
  }

  reset(e){
    let email = {
      "Email" :e.target.Email.value
      }
    this.service.ResetPassword(email).subscribe((x) => {
      this.user = x;
      this.router.navigate(["access"])
    })
    }

}
