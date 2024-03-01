import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
import { Component, afterRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { tap } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(){
  }
}
