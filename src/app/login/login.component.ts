import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // con la directiva input se puede recuperar datos de un component a otro
  @Input() userName=''

  //Para avisarle al padre que se hizo algo en el hijo usamos output
  @Output() addNameEvent = new EventEmitter<string>();

  loginEmmiter(){
    // alert("mi nombre desde el hijo")
    this.addNameEvent.emit("Se clikeo desde el login")
  }

}
