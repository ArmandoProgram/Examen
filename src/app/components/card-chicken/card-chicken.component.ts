import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cartOutline, heart } from 'ionicons/icons';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-chicken',
  templateUrl: './card-chicken.component.html',
  styleUrls: ['./card-chicken.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CardChickenComponent  implements OnInit {
  @Input() chickenInfo: any

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
