import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Researchnotes';

  constructor(){
    document.addEventListener( "contextmenu", function(e) {
      console.log(e);
    });
  }

  ngOnInit(){

  }


  


}
