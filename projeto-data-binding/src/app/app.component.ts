import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-data-binding';

  valor: number = 5;

  mudarValor() {
    this.valor++;
  }

}
