import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';
import { SobreComponent } from './components/template/sobre/sobre.component';
import { ProjetosComponent } from './components/template/projetos/projetos.component';
import { ContatosComponent } from './components/template/contatos/contatos.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ServicosComponent } from './components/template/servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    SobreComponent,
    ProjetosComponent,
    ContatosComponent,
    FooterComponent,
    ServicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
