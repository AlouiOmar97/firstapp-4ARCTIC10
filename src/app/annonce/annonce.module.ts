import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { HomeAnnonceComponent } from './home-annonce/home-annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { AnnonceComponent } from './annonce.component';



@NgModule({
  declarations: [
    ListAnnonceComponent,
    HomeAnnonceComponent,
    AddAnnonceComponent,
    AnnonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
