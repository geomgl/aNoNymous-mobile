import { Component } from '@angular/core';
import { NavController, NavControllerBase } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CharitiesPage } from '../charities/charities';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public password: string;


  constructor(public navCtrl: NavController) {

  }


  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      firstName: this.firstName,
      lastName:  this.lastName,
      username:  this.username,
      email:  this.email,
      password:  this.password,
    })

  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }
}
   