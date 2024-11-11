import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ChickenService } from 'src/app/services/chicken.service';
import { CardCountryComponent } from 'src/app/components/card-country/card-country.component';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.page.html',
  styleUrls: ['./by-country.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ToolbarComponent, CardCountryComponent]
})
export class ByCountryPage implements OnInit {
  @Input() countryInfo: any
  listaCountry:any[] = []
  load = false
  constructor(private Countries: ChickenService) {
    this.Countries.getChickenByCountry().subscribe( (resp: any) => {
      console.log(resp.meals);
      this.listaCountry = resp.meals;
      if(resp){
        this.load = true;
        this.listaCountry = resp.meals;
      }
    });
  }

  ngOnInit() {
  }

}
