import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cartOutline, heart } from 'ionicons/icons';
import { Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss'],
  standalone: true,
  imports: [IonicModule],

})
export class CardCountryComponent  implements OnInit {
  @Input() countryInfo: any

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
    addIcons({cartOutline, heart})
  }

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Nombre de food agregada al carrito!',
      duration: 1500,
      position: 'top',
      color: 'success',
      icon: 'heart'
    });
    toast.present();
  }

}
