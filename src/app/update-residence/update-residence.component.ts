import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../core/models/residence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent {
residence: Residence={
  id: 0,
  name: "",
  address: "",
  status: "disponible",
  image: "../../assets/images/R4.jpg",
  showAddress: false,
  liked: false
}
updateResidenceForm!: FormGroup
id!: number
constructor(private router: Router, private activatedRoute: ActivatedRoute, private residenceService: ResidenceService){}
ngOnInit(){
  this.id= this.activatedRoute.snapshot.params['id']
  console.log("id");
  
  this.residenceService.findResidenceById(this.id).subscribe((data)=>{
    this.residence= data
    console.log("update");
    
    console.log(data);
    
    this.updateResidenceForm= new FormGroup({
      name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
      address: new FormControl(this.residence.address, Validators.required),
      status: new FormControl(this.residence.status),
      image: new FormControl(this.residence.image),
      showAddress: new FormControl(this.residence.showAddress),
      liked: new FormControl(this.residence.liked)
    })
  })
}

get name(){return this.updateResidenceForm.get('name')}
get address(){return this.updateResidenceForm.get('address')}

updateResidence(){
  console.log(this.updateResidenceForm.value);
  this.residenceService.updateResidence(this.id, this.updateResidenceForm.value).subscribe(()=>{
    console.log("Residence Updated !");
    this.router.navigateByUrl('/residence')
  })
}

}
