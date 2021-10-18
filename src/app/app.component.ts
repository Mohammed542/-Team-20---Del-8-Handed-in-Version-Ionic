import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Account',
      children: [
        {
          title: 'My Profile',
          url: '/myprofile',
          icon: 'person-sharp'
        },
        {
          title: 'Logout',
          url: '/access',
          icon: 'log-out-sharp'
        }

      ]
    },
    {
      title: 'Maintenance',
      children: [
        {
          title: 'View Maintenance',
          url: '/maintenance',
          icon: 'settings'
        }

      ]
    }
  ];
  constructor() {}
}
