import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonLabel, IonCard, IonImg, IonCardContent, IonCardTitle, IonCardHeader, IonItem, IonItemDivider, IonList, IonAvatar, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { ChickenService } from 'src/app/services/chicken.service';
import { CardChickenComponent } from "../../components/card-chicken/card-chicken.component";

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.page.html',
  styleUrls: ['./chicken.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonAvatar, IonList, IonItemDivider, IonItem, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonCard, IonLabel, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ToolbarComponent, CardChickenComponent]
})
export class ChickenPage implements OnInit {
  @Input() chickenInfo: any
  listaChicken:any[] = []
  load = false
  constructor(private ch: ChickenService) {
    this.ch.getTopChicken().subscribe( (resp: any) => {
      console.log(resp.meals);
      this.listaChicken = resp.meals;
      if(resp){
        this.load = true;
        this.listaChicken = resp.meals;
      }
    });
  }

  

  ngOnInit() {
  }

}
