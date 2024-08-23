import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { SubirImgComponent } from './subir-img/subir-img.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GaleriaComponent, SubirImgComponent, VistaDetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'galeria-de-img';
}
