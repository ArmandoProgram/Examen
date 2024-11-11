import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FoodService } from 'src/app/services/food.service';
import { addIcons } from 'ionicons';
import { pencil, pencilOutline, shareSocialOutline, trashOutline } from 'ionicons/icons';
import { Share } from '@capacitor/share';
import { ModalController } from '@ionic/angular/standalone';
import { NewFoodComponent } from 'src/app/modals/new-food/new-food.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonToolbar, ToolbarComponent]
})
export class HomePage implements OnInit {
  listaFood: any[] = [];
  load = false;
  private _modalCtrl = inject(ModalController);

  constructor(private fd: FoodService) {}

  ngOnInit() {
    addIcons({ pencilOutline, trashOutline, shareSocialOutline });
    
    this.fd.getFood().subscribe(
      (resp: any) => {
        console.log(resp);
        this.listaFood = resp; 
        this.load = true;
      },
      (error) => {
        console.error('Error al cargar los alimentos:', error);
      }
    );
  }

  /*async compartir (food:any){
    await Share.share({
      title: 'Prueba esta: ' +food.name,
      text: food.description,
      url: food.url_img
    })
  }*/

  async newFood() {
    const modal = await this._modalCtrl.create({
      component: NewFoodComponent,
      initialBreakpoint: .7
    });
    return await modal.present();
  }

}