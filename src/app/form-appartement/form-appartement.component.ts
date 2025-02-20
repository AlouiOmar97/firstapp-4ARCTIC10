import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../core/models/appartement';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.css']
})
export class FormAppartementComponent {
  apartForm!: FormGroup
  apart: Apartment={
    apartNum: 0, 
    floorNum: 0, 
    surface: 0, 
    terrace: false, 
    surfaceterrace: 0, 
    category: "S+2",
    ResidenceId: 0 
  }

  ngOnInit(){
    this.apartForm= new FormGroup({
      apartNum: new FormControl(this.apart.apartNum, Validators.required),
      floorNum: new FormControl(this.apart.floorNum, Validators.required),
      terrace: new FormControl(this.apart.terrace, Validators.required),
      surface: new FormControl(this.apart.surface, Validators.required),
      surfaceterrace: new FormControl(this.apart.surfaceterrace, Validators.required),
      category: new FormControl(this.apart.category, Validators.required),
      residence: new FormControl(this.apart.ResidenceId),
    })
  }

  get apartNum(){ return this.apartForm.get('apartNum')}
  get floorNum(){ return this.apartForm.get('floorNum')}
  get terrace(){ return this.apartForm.get('terrace')}
  get surface(){ return this.apartForm.get('surface')}
  get surfaceterrace(){ return this.apartForm.get('surfaceterrace')}
  get category(){ return this.apartForm.get('category')}
  get residence(){ return this.apartForm.get('residence')}


  addApartment(){
    console.log(this.apartForm.value);
    console.log(this.apartForm.value.category);
  }
}
