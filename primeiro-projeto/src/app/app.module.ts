import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

// DECORATOR QUE INFORMA QUE ESSA CLASSE É UM MODULO
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
  ],
  imports: [
    BrowserModule, // prepara a aplicação para ser executada em um browser
    AppRoutingModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // qual o componente que vai servir como container do projeto todo
})
export class AppModule { }
