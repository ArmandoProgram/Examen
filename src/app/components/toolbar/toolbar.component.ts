import { Component, Input, input, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonBackButton, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [IonHeader, IonButtons, IonBackButton, IonTitle, IonToolbar]
})
export class ToolbarComponent  implements OnInit {
  @Input() title!: string;
  @Input() name!: string;

  constructor() { }

  ngOnInit() {}

}
