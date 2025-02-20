import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';

const routes : Routes = [
  { path:'', redirectTo:'home' , pathMatch:'full'},
  { path:'home' ,  component: HomeComponent},
  { path:'appartement',  component: AppartementComponent},
  { path:'appartement/add',  component: FormAppartementComponent},
  { path:'residence',  component: ResidenceComponent},
  { path:'residence/add',  component: AddResidenceComponent},
  { path:'residence/details/:id', component: ResidenceDetailsComponent},
  { path:'**', component: NotFoundComponent}, 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
