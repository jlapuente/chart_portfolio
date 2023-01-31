import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chart_portfolio';

  isOpen: boolean = false;

  ngOnInit(): void {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      //You have yout key code here
      if (e.keyCode == 32 && !this.isOpen) {
        console.log(e);
        console.log(e.keyCode);
        this.isOpen = !this.isOpen;
        this.changeMenu();
      }
    });




  }


  changeMenu() {
    const element = document.querySelector('.container');
    if (element != null) {
      element.classList.add('animate__animated', 'animate__backOutUp');
      element.addEventListener('animationend', () => {
        console.log("animacion acabada")
        const charDescription = document.querySelector('.char-description');
        if(charDescription != null){
          charDescription.classList.remove('hidden');
        }
      });
    }

  }

}
