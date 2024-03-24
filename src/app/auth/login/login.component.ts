import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatGridListModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(){
    
  }

  registerButton(){
    console.log("Entra a registrar")
    document.getElementById("container")?.classList.add("sign-up-mode")
  }

  loginButton(){
    document.getElementById("container")?.classList.remove("sign-up-mode")
  }

  registerButton2(){
    console.log("Entra a registrar")
    document.getElementById("container")?.classList.add("sign-up-mode2")
  }

  loginButton2(){
    document.getElementById("container")?.classList.remove("sign-up-mode2")
  }


}
