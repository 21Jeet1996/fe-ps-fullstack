import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductHeaderComponent } from "./components/product-header/product-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-client';
}
