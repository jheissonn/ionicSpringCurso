import { AuthService } from './../../services/domain/auth.service';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService) {

  }

  login(){
    this.auth.authenticate(this.creds).subscribe(response =>{
      console.log(response.headers.get('Authorization'))
    },
    error =>{});
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
    ionViewDidLeave() {
    this.menu.swipeEnable(true);
    }
}
