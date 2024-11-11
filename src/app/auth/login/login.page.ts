import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonInput, IonButton } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonButton, IonInput, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  loginForm: FormGroup;
  private _route: any;
  constructor() { 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  /*login(){
    console.log(this.loginForm.value)
    const loginData = this.loginForm.value;
    this.authService.login(loginData).subscribe({
      next: (response) => {
        console.log('Login exitoso', response);
        
      },
      error: (error) => {
        console.error('Error en el login', error);
        return "Error al ingresar"
      }
    });
  }*/

  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe( (res: any) => { 
        console.log(res);
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.admin));
        if (res.access_token){
          console.log('hola')
          this._route.navigate(['/home'])
        }
      })
    }
  }

}
