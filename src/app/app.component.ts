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
  markupPola = "";
  polaOutput = "";

  powerCalculate(a,b){
    this.output = "";
    this.polaOutput = "";
    this.data = Math.pow(parseInt(a), parseInt(b));
    this.output += this.data;

    // Ganjil
    this.markupPola = "";
    if(this.data % 2 == 1){
      var maxCount = 0;
      var minCount = 0;
      if(a > b){
        maxCount = a;
        minCount = b;
      }
      else{
        maxCount = b;
        minCount = a;
      }

      var printCheck = true;
      var kCount = 0;
      var spaceCount = 0;
      for(var i = 0; i < maxCount; i++){
        var polaBaris = "";
        if(kCount + 1 <= minCount && printCheck){
          kCount += 1;
        }
        else{
          kCount = 0;
          printCheck = false;
        }
        // *
        for(var j = 0; j < maxCount - i; j++){
          polaBaris += '*';
        }
        // o
        for (var j = 0; j < kCount; j++){
          polaBaris += 'o';
        }
        this.markupPola += polaBaris + "<br></br>";
      }
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
    this.polaOutput = this.markupPola;
  }

  clearText(){
    document.getElementById("aText").value = "";
    document.getElementById("bText").value = "";
    this.output = "";
    this.polaOutput = "";
  }
}
