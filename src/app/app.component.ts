import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, afterRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // ya no utilizamos el tipo de dato por que solo usa la inferencia
  city = 'Mexico'
  userName = 'Yisus'

  //Recuperamos desde el hijo algo
  recoverFromLogin = ''
  // title = 'ys-pectrum';
  private readonly http = inject(HttpClient);
  todos$ = this.http.get<{title: string}[]>('https://jsonplaceholder.typicode.com/todos').pipe(tap((res) => {
    //console.log('Cargando desde el template, todos los todos', res);
  }));

  constructor(){
    // con Server Side Rendering cuando demos reload, se va ajalar desde un js que se crea en su servidor los datos, por eso es que ya no nos apreceran las peticiones en network, esto aumenta la velocidad
    //Nota son SSR todo lo que hagamos en el navegador debe de existir en el servidor que se crea con SSR
    //this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => console.log("Cargado desde el constructor 1 =>"));
    console.log("Hola");
    //Este ejemplo de abajo marca error por que solo existe en el navegador
    //localStorage.setItem('jwt','dsdsfsdf')

    //Si queremos solo cosas en especificas que solo puede correrce en el navegador ocupamos la fguncion afterRender, que ya es una funcion que viene con angular
    afterRender(()=>{
      localStorage.setItem('jwt','dsdsfsdf')
    })
    
  
  }


  //Meotdo ppara recuperar datos desde un api
  getTodo(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => console.log("Cargado desde el boton, top 10"));
  }

  //metodo para recuperar los datos desde el logincomponent
  getFromLogin(messageLogin:string){
    this.recoverFromLogin = messageLogin
    console.log(this.recoverFromLogin)
  }
}
