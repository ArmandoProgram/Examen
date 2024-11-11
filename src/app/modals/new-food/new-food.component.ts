import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, cashOutline } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.scss'],
  imports: [IonInput, IonContent, IonButton]
})
export class NewFoodComponent  implements OnInit {
  foodform!: FormGroup;
  private fb = inject(FormBuilder);

  constructor() { 
    addIcons({cashOutline, add});
    this.foodform = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      url_image: [''],
    });
  }


  ngOnInit() {}

}
