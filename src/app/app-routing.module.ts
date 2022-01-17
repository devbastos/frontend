import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './components/template/contatos/contatos.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ProjetosComponent } from './components/template/projetos/projetos.component';
import { SobreComponent } from './components/template/sobre/sobre.component';

const routes: Routes = [
  { path: "home", component: HeaderComponent },
  { path: "sobre", component: SobreComponent },
  { path: "projetos", component: ProjetosComponent },
  { path: "contatos", component: ContatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
