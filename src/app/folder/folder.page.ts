import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonCard, IonIcon, IonButton, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { carOutline, cartOutline, heart } from 'ionicons/icons';
import { ChickenPage } from '../pages/chicken/chicken.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [ChickenPage, IonCol, IonButton, IonIcon, CurrencyPipe, IonCard, IonImg, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class FolderPage implements OnInit {
  @Input() chickenInfo:any
  @Input() countryInfo:any
  /*food = [
    {
      title: 'Doritos',
      price: '20',
      type: 'Snacks',
      available: 'True',
      imgUrl: 'https://www.smartnfinal.com.mx/wp-content/uploads/2021/05/90041-Doritos-nacho-super-size-Sabritas-650-g.jpg'
    },
    {
      title: 'hamburguesa',
      price: '180',
      type: 'snack',
      available: 'True',
      imgUrl: 'https://www.bedbathandbeyond.com.mx/media/nacionales/nacionales2/almohada_king_69976125_2_.jpg'
    },
    {
      title: 'Sincronizadas',
      price: '15',
      type: 'entrada',
      available: 'True',
      imgUrl: 'https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg'
    },
    {
      title: 'Sopa',
      price: '150',
      type: 'Fuerte',
      available: 'True',
      imgUrl: 'https://m.media-amazon.com/images/I/51JzLIFmidL._AC_UF894,1000_QL80_.jpg'
    },
    {
      title: 'Tacos',
      price: '25',
      type: 'Fuerte',
      available: 'True',
      imgUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/return-to-tiffany-collar-con-cuentas-60714819_1017592_ED.jpg'
    },
  ]*/
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    addIcons({heart, cartOutline})
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
