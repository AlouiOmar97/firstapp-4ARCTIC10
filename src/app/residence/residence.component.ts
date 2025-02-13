import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    {
      id: 1, "name": "El fel", "address": "Borj Cedria",
      "image": "../../assets/images/R1.jpg", status: "Disponible", showAddress: false, liked: false
    },
    {
      id: 2, "name": "El yasmine",
      "address": "Ezzahra", "image": "../../assets/images/R2.jpg", status:
        "Disponible", showAddress: false, liked: false
    },
    {
      id: 3, "name": "El Arij",
      "address": "Rades", "image": "../../assets/images/R3.jpg", status:
        "Vendu", showAddress: false, liked: false
    },
    {
      id: 4, "name": "El Anber", "address": "inconnu",
      "image": "../../assets/images/R4.jpg", status: "En Construction", showAddress: true, liked: false
    }
  ];

  search: string = '';
  // list: Residence[] = [];
  showLocation(res: Residence) {
    if (res.address === "inconnu") {
      alert(res.address);
      return;
    }
    res.showAddress = !res.showAddress;
  }
  likeBtn(res: Residence) {
    res.liked = !res.liked
  }
  searchFunction() {
    // this.list = this.listResidences
    // return this.listResidences = this.listResidences.filter(res => res.address.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
  }
}
