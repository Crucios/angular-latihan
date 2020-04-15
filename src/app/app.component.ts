import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data = 0;
  output = "";
  markupPola = ""

  powerCalculate(a,b){
    this.output = "";
    this.data = Math.pow(parseInt(a), parseInt(b));
    this.output += this.data;

    // Ganjil
    this.markupPola = "";
    if(this.data % 2 == 1){
      
    }
    // Genap
    else if (this.data % 2 == 0){
      for(var i = b; i <= this.data; i++){
        var polaBaris = "";
        for(var j = 0; j < i; j++){
          polaBaris += '*';
        }
        this.markupPola += polaBaris + "<br></br>";
      }
    }
  }

  clearText(){
    document.getElementById("aText").value = "";
    document.getElementById("bText").value = "";
    this.output = "";
  }
}
