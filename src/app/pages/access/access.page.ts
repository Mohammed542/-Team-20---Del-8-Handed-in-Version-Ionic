import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  constructor(private service: AccessService, private router: Router, private formbulider: FormBuilder,
    private alertController: AlertController) { }

  form: any;
  user: any;
    loading = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  ngOnInit() {
    this.form = this.formbulider.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  login(e) {
    this.loading = true;
    this.service.Login(e.target.Username.value, e.target.Password.value).subscribe((response: any) => {
      if (response.Success && response.Result.ServiceProviderID) {
        console.log("ServiceProvider")
        sessionStorage["ServiceProviderID"] = response.Result.ServiceProviderID;
        sessionStorage["Name"] = response.Result.Name;
        sessionStorage["Surname"] = response.Result.Surname;
        sessionStorage["EmailAddress"] = response.Result.EmailAddress;
        sessionStorage["CellphoneNumber"] = response.Result.CellphoneNumber;
        sessionStorage["IDNumber"] = response.Result.IDNumber;
        sessionStorage["DateOfEmployment"] = response.Result.DateOfEmployment;
        sessionStorage["UserTypeID"] = response.Result.UserTypeID;
        sessionStorage["Password"] = response.Result.Password;

        this.router.navigate(["home"])

      }
      else {
        this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Warning!',
          message: 'This incorrect login details have been provided',
          buttons: [ {
              text: 'Ok',
            }
          ]
        }).then((alert) => alert.present());
      }

    this.loading = false;
    })
  }

  route() {
    console.log("click")
    this.router.navigate(['reset-password'])
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
