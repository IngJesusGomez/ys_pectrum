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
    document.getElementById("container")?.classList.add("right-panel-active")
  }

  loginButton(){
    document.getElementById("container")?.classList.remove("right-panel-active")
  }

}
