import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '4 ARCTIC 10';
  search= "ABc"
  nb = 5
  y= true
  x: String= "";
  fillX(y:String ="Hi"): void {
    this.x="Bonjour"
  }

  getNb(x: number){
    return 10+x
  }

  ngOnInit(): void {
    console.log("testt");
    this.x="value 1"
  }
}
