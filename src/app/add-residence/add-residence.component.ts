import { name } from './../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
residence: Residence={
  id: 0,
  name: "",
  address: "",
  status: "",
  image: "",
  showAddress: false,
  liked: false
}
addResidenceForm!: FormGroup

ngOnInit(){
  this.addResidenceForm= new FormGroup({
    name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(this.residence.address, Validators.required)
  })
}

get name(){return this.addResidenceForm.get('name')}
get address(){return this.addResidenceForm.get('address')}

}
