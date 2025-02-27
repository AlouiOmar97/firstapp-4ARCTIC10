import { name } from './../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

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
  status: "disponible",
  image: "../../assets/images/R4.jpg",
  showAddress: false,
  liked: false
}
addResidenceForm!: FormGroup
constructor(private residenceService: ResidenceService, private router: Router){}
ngOnInit(){
  this.addResidenceForm= new FormGroup({
    name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(this.residence.address, Validators.required),
    status: new FormControl(this.residence.status),
    image: new FormControl(this.residence.image),
    showAddress: new FormControl(this.residence.showAddress),
    liked: new FormControl(this.residence.liked)
  })
}

get name(){return this.addResidenceForm.get('name')}
get address(){return this.addResidenceForm.get('address')}

addResidence(){
  console.log(this.addResidenceForm.value);
  this.residenceService.addResidence(this.addResidenceForm.value).subscribe(()=>{
    console.log("Residence Added !");
    this.router.navigateByUrl('/residence')
  })
}

}
