import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitán America';
  nombre2 = 'VIctOr ManUEL QUIllay braVo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.56;
  fecha: Date = new Date();
  activar = true;
  idioma = 'es';
  videoURL = 'https://www.youtube.com/embed/PXhBk4Y1ewo';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
        resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'string',
    clave: 'Wolwerine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
}
